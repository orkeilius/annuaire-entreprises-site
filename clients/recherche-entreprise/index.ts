import { HttpNotFound } from '#clients/exceptions';
import routes from '#clients/routes';
import stubClientWithSnapshots from '#clients/stub-client-with-snaphots';
import constants from '#models/constants';
import { IConventionsCollectives } from '#models/conventions-collectives-list';
import { createEtablissementsList } from '#models/core/etablissements-list';
import { IETATADMINSTRATIF, estActif } from '#models/core/etat-administratif';
import {
  IEtablissement,
  NotEnoughParamsException,
  createDefaultEtablissement,
  createDefaultUniteLegale,
} from '#models/core/types';
import { IEtatCivil, IPersonneMorale } from '#models/immatriculation';
import { ISearchResults } from '#models/search';
import SearchFilterParams from '#models/search-filter-params';
import {
  Siren,
  Siret,
  extractNicFromSiret,
  extractSirenFromSiret,
  formatFirstNames,
  parseIntWithDefaultValue,
  verifySiren,
  verifySiret,
} from '#utils/helpers';
import {
  libelleFromCategoriesJuridiques,
  libelleFromCodeNAFWithoutNomenclature,
} from '#utils/helpers/formatting/labels';
import {
  etatFromEtatAdministratifInsee,
  parseDateCreationInsee,
  statuDiffusionFromStatutDiffusionInsee,
} from '#utils/helpers/insee-variables';
import { httpGet } from '#utils/network';
import {
  IDirigeant,
  IMatchingEtablissement,
  IResult,
  ISearchResponse,
  ISiege,
} from './interface';

type ClientSearchRechercheEntreprise = {
  searchTerms: string;
  page: number;
  searchFilterParams?: SearchFilterParams;
  fallbackOnStaging?: boolean;
  useCache?: boolean;
  inclureEtablissements?: boolean;
  pageEtablissements?: number;
};

/**
 * Get results for searchTerms from Sirene ouverte API
 */
const clientSearchRechercheEntreprise = async ({
  searchTerms,
  page,
  searchFilterParams,
  fallbackOnStaging = false,
  useCache = false,
  inclureEtablissements = false,
  pageEtablissements = 1,
}: ClientSearchRechercheEntreprise): Promise<ISearchResults> => {
  const encodedTerms = encodeURIComponent(searchTerms);

  const route =
    process.env.ALTERNATIVE_SEARCH_ROUTE ||
    (fallbackOnStaging
      ? routes.rechercheEntreprise.rechercheUniteLegaleStaging
      : routes.rechercheEntreprise.rechercheUniteLegale);

  const filters = searchFilterParams?.toApiURI();

  if (!filters && (!encodedTerms || encodedTerms.length < 3)) {
    throw new NotEnoughParamsException();
  }

  let url = route;
  url += `?per_page=10&page=${page}&q=${encodedTerms}&limite_matching_etablissements=3${
    searchFilterParams?.toApiURI() || ''
  }`;
  url += `&include_admin=slug`;

  if (inclureEtablissements) {
    url += `,etablissements`;
  }
  if (inclureEtablissements && pageEtablissements) {
    url += `&page_etablissements=${pageEtablissements}`;
  }

  const timeout = fallbackOnStaging
    ? constants.timeout.XL
    : constants.timeout.L;

  const results = await httpGet<ISearchResponse>(url, {
    timeout,
    headers: { referer: 'annuaire-entreprises-site' },
    useCache,
  });

  if (!results.results || results.results.length === 0) {
    throw new HttpNotFound('No results');
  }
  return mapToDomainObjectNew(results, pageEtablissements);
};

const mapToDomainObjectNew = (
  data: ISearchResponse,
  pageEtablissements: number
): ISearchResults => {
  const { total_results = 0, total_pages = 0, results = [], page } = data;

  return {
    currentPage: parseIntWithDefaultValue(page as string, 1),
    resultCount: total_results,
    pageCount: total_pages,
    results: results.map((r) => mapToUniteLegale(r, pageEtablissements)),
  };
};

const mapToUniteLegale = (result: IResult, pageEtablissements: number) => {
  const {
    nature_juridique,
    siege,
    dirigeants,
    complements: {
      collectivite_territoriale = null,
      est_bio = false,
      egapro_renseignee = false,
      est_entrepreneur_individuel = false,
      est_organisme_formation = false,
      est_qualiopi = false,
      est_entrepreneur_spectacle = false,
      est_ess = false,
      est_finess = false,
      est_rge = false,
      est_service_public = false,
      est_uai = false,
      est_societe_mission = false,
      identifiant_association = null,
      statut_entrepreneur_spectacle = '',
      est_association = false,
    },
    matching_etablissements,
    categorie_entreprise,
    annee_categorie_entreprise = null,
    tranche_effectif_salarie = null,
    annee_tranche_effectif_salarie = null,
    date_creation,
    date_fermeture,
    date_mise_a_jour,
    date_mise_a_jour_insee,
    date_mise_a_jour_rne,
    statut_diffusion,
    etablissements = [],
    caractere_employeur = '',
    etat_administratif,
    nombre_etablissements_ouverts,
  } = result;

  const nomComplet = (result.nom_complet || 'Nom inconnu').toUpperCase();

  const siren = verifySiren(result.siren);

  const colter = collectivite_territoriale
    ? {
        codeColter: collectivite_territoriale.code || null,
        codeInsee: collectivite_territoriale.code_insee || null,
        niveau: collectivite_territoriale.niveau || null,
        elus: (collectivite_territoriale?.elus || []).map(mapToElusModel),
      }
    : { codeColter: null };

  const etablissementSiege = mapToSiege(
    siege,
    est_entrepreneur_individuel,
    siren
  );

  const matchingEtablissements = matching_etablissements.map(
    (matchingEtablissement) =>
      mapToEtablissement(matchingEtablissement, est_entrepreneur_individuel)
  );

  // case no open etablisssment
  let etatAdministratif = etatFromEtatAdministratifInsee(
    etat_administratif,
    siren
  );
  if (estActif({ etatAdministratif }) && nombre_etablissements_ouverts === 0) {
    etatAdministratif = IETATADMINSTRATIF.ACTIF_ZERO_ETABLISSEMENT;
  }

  const etablissementsList = createEtablissementsList(
    etablissements.length > 0
      ? etablissements.map((e) =>
          mapToEtablissement(e, est_entrepreneur_individuel)
        )
      : [etablissementSiege],
    pageEtablissements,
    result.nombre_etablissements
  );

  const estEntrepriseInclusive = siren === '419437629';

  return {
    ...createDefaultUniteLegale(siren),
    siege: etablissementSiege,
    matchingEtablissements,
    nombreEtablissements: result.nombre_etablissements || 1,
    nombreEtablissementsOuverts: result.nombre_etablissements_ouverts || 0,
    etablissements: etablissementsList,
    etatAdministratif,
    statutDiffusion: statuDiffusionFromStatutDiffusionInsee(
      statut_diffusion || 'O',
      siren
    ),
    nomComplet,
    libelleNatureJuridique: libelleFromCategoriesJuridiques(nature_juridique),
    categorieEntreprise: categorie_entreprise,
    anneeCategorieEntreprise: annee_categorie_entreprise,
    trancheEffectif:
      tranche_effectif_salarie ??
      (caractere_employeur === 'N' ? caractere_employeur : null),
    anneeTrancheEffectif: annee_tranche_effectif_salarie,
    chemin: result.slug || result.siren,
    natureJuridique: nature_juridique || '',
    libelleActivitePrincipale: libelleFromCodeNAFWithoutNomenclature(
      result.activite_principale,
      false
    ),
    activitePrincipale: result.activite_principale,
    dirigeants: dirigeants.map(mapToDirigeantModel),
    complements: {
      estBio: est_bio,
      estEss: est_ess,
      estServicePublic: est_service_public,
      estEntrepreneurIndividuel: est_entrepreneur_individuel,
      estEntrepreneurSpectacle: est_entrepreneur_spectacle,
      statutEntrepreneurSpectacle: statut_entrepreneur_spectacle,
      estFiness: est_finess,
      egaproRenseignee: egapro_renseignee,
      estRge: est_rge,
      estOrganismeFormation: est_organisme_formation,
      estSocieteMission: est_societe_mission,
      estQualiopi: est_qualiopi,
      estAssociation: est_association,
      estUai: est_uai,
      estEntrepriseInclusive,
    },
    association: {
      idAssociation: identifiant_association,
      data: null,
    },
    colter,
    dateCreation: parseDateCreationInsee(date_creation),
    dateDerniereMiseAJour: date_mise_a_jour || '',
    dateMiseAJourInsee: date_mise_a_jour_insee || '',
    dateMiseAJourInpi: date_mise_a_jour_rne || '',
    dateFermeture: date_fermeture ?? '',
    conventionsCollectives: etablissements.reduce(
      (idccSiretPair, { siret, liste_idcc }) => {
        (liste_idcc || []).forEach((idcc) => {
          idccSiretPair[idcc] = [...(idccSiretPair[idcc] || []), siret];
        });
        return idccSiretPair;
      },
      {} as IConventionsCollectives
    ),
  };
};

const mapToSiege = (
  siege: IResult['siege'],
  est_entrepreneur_individuel: boolean,
  siren: Siren
) => {
  if (!siege || Object.keys(siege).length === 0) {
    return {
      ...createDefaultEtablissement(),
      siret: '' as Siret,
    };
  }
  return mapToEtablissement(siege, est_entrepreneur_individuel);
};

const mapToDirigeantModel = (
  dirigeant: IDirigeant
): IEtatCivil | IPersonneMorale => {
  const {
    siren = '',
    sigle = '',
    denomination = '',
    prenoms = '',
    nom = '',
    qualite = '',
  } = dirigeant;

  if (!!siren) {
    return {
      siren,
      denomination: `${denomination}${sigle ? ` (${sigle})` : ''}`,
      role: qualite,
    } as IPersonneMorale;
  }

  return {
    sexe: null,
    nom: (nom || '').toUpperCase(),
    prenom: formatFirstNames((prenoms || '').split(' '), 1),
    role: qualite,
    dateNaissancePartial: '',
    lieuNaissance: '',
  };
};

const mapToElusModel = (eluRaw: any): IEtatCivil => {
  const { nom, prenoms, annee_de_naissance, fonction, sexe } = eluRaw;

  return {
    sexe,
    nom: (nom || '').toUpperCase(),
    prenom: formatFirstNames((prenoms || '').split(' '), 1),
    role: fonction,
    dateNaissancePartial: annee_de_naissance,
    lieuNaissance: '',
  };
};

const mapToEtablissement = (
  etablissement: ISiege | IMatchingEtablissement,
  estEntrepreneurIndividuel: boolean
): IEtablissement => {
  const {
    siret,
    latitude = '0',
    longitude = '0',
    code_postal = '',
    libelle_commune = '',
    adresse,
    liste_enseignes,
    etat_administratif,
    est_siege = false,
    nom_commercial = '',
    activite_principale = '',
    date_creation = '',
    date_debut_activite = '',
    date_fermeture = '',
    tranche_effectif_salarie = '',
    caractere_employeur = '',
    annee_tranche_effectif_salarie = '',
    liste_finess = [],
    liste_id_bio = [],
    liste_idcc = [],
    liste_id_organisme_formation = [],
    liste_rge = [],
    liste_uai = [],
    statut_diffusion_etablissement,
  } = etablissement;

  const enseigne = (liste_enseignes || []).join(' ');

  const adressePostale = adresse
    ? `${
        enseigne ? `${enseigne}, ` : nom_commercial ? `${nom_commercial}, ` : ''
      }${adresse}`
    : '';

  const etatAdministratif = etatFromEtatAdministratifInsee(
    etat_administratif,
    siret
  );

  return {
    ...createDefaultEtablissement(),
    siren: extractSirenFromSiret(siret),
    enseigne,
    nic: extractNicFromSiret(siret),
    siret: verifySiret(siret),
    adresse,
    codePostal: code_postal,
    commune: libelle_commune,
    adressePostale,
    trancheEffectif:
      caractere_employeur === 'N'
        ? caractere_employeur
        : tranche_effectif_salarie,
    anneeTrancheEffectif: annee_tranche_effectif_salarie,
    latitude,
    longitude,
    estSiege: est_siege,
    etatAdministratif,
    statutDiffusion: statuDiffusionFromStatutDiffusionInsee(
      statut_diffusion_etablissement || 'O',
      siret
    ),
    denomination: nom_commercial,
    libelleActivitePrincipale:
      libelleFromCodeNAFWithoutNomenclature(activite_principale),
    activitePrincipale: activite_principale,
    dateCreation: parseDateCreationInsee(date_creation),
    dateDebutActivite: date_debut_activite ?? '',
    dateFermeture: date_fermeture ?? '',
    complements: {
      estEntrepreneurIndividuel,
      idFiness: liste_finess || [],
      idBio: liste_id_bio || [],
      idcc: liste_idcc || [],
      idOrganismeFormation: liste_id_organisme_formation || [],
      idRge: liste_rge || [],
      idUai: liste_uai || [],
    },
  };
};

export default stubClientWithSnapshots({
  clientSearchRechercheEntreprise,
});
