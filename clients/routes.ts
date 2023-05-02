const routes = {
  apiEntreprise: {
    association: '/v4/djepva/api-association/associations/',
    conformite: {
      fiscale: '/v4/dgfip/unites_legales/',
      vigilance: '/v4/urssaf/unites_legales/',
      msa: '/v3/msa/etablissements/',
    },
  },
  ban: 'https://api-adresse.data.gouv.fr/search/?q=',
  bodacc: {
    ods: {
      metadata:
        'https://bodacc-datadila.opendatasoft.com/api/datasets/1.0/search/?q=annonces-commerciales',
      search:
        'https://bodacc-datadila.opendatasoft.com/api/records/1.0/search/?dataset=annonces-commerciales',
    },
    site: {
      annonce: 'https://www.bodacc.fr/annonce/detail-annonce/',
      recherche:
        'https://www.bodacc.fr/pages/annonces-commerciales/?sort=dateparution',
    },
  },
  conventionCollectives: {
    api: 'https://siret2idcc.fabrique.social.gouv.fr/api/v2/',
    site: 'https://code.travail.gouv.fr/outils/convention-collective',
  },
  donneesFinancieres: {
    ods: {
      metadata:
        'https://data.economie.gouv.fr/api/datasets/1.0/search/?q=ratios_inpi_bce',
      search:
        'https://data.economie.gouv.fr/api/records/1.0/search/?dataset=ratios_inpi_bce',
    },
  },
  agregatsComptableCollectivite: {
    ods: {
      metadata:
        'https://data.economie.gouv.fr/api/datasets/1.0/search/?q=agregats-comptables-des-collectivites-et-des-etablissements-publics-locaux-2019',
      search:
        'hhttps://data.economie.gouv.fr/api/records/1.0/search/?dataset=agregats-comptables-des-collectivites-et-des-etablissements-publics-locaux-2019',
    },
  },
  dgefp: {
    metadata:
      'https://dgefp.opendatasoft.com/api/datasets/1.0/search/?q=liste-publique-des-of-v2',
    search:
      'https://dgefp.opendatasoft.com/api/records/1.0/search/?dataset=liste-publique-des-of-v2',
  },
  educationNationale: {
    api: 'https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-annuaire-education',
    site: 'https://www.education.gouv.fr/annuaire',
  },
  geo: {
    commune: 'https://geo.api.gouv.fr/communes?fields=codesPostaux&format=json',
    departement: 'https://geo.api.gouv.fr/departements?fields=code&format=json',
  },
  journalOfficielAssociations: {
    ods: {
      metadata:
        'https://journal-officiel-datadila.opendatasoft.com/api/datasets/1.0/search/?q=jo_associations',
      search:
        'https://journal-officiel-datadila.opendatasoft.com/api/records/1.0/search/?dataset=jo_associations',
    },
    site: {
      dca: 'https://www.journal-officiel.gouv.fr/pages/associations-detail-annonce',
      justificatif:
        'https://www.journal-officiel.gouv.fr/document/associations_b/',
      recherche:
        'https://www.journal-officiel.gouv.fr/pages/associations-recherche',
    },
  },
  franceConnect: {
    authorization: '/api/v1/authorize',
    token: '/api/v1/token',
    userInfo: '/api/v1/userinfo',
    logout: '/api/v1/logout',
  },
  matomo: {
    report: {
      copyPasteEvents:
        'https://stats.data.gouv.fr/index.php?module=API&format=json&idSite=145&period=range&method=Events.getNameFromCategoryId&idSubtable=5&module=API&showColumns=label,nb_events&filter_limit=9999&date=',
      npsEvents:
        'https://stats.data.gouv.fr/index.php?module=API&format=json&idSite=145&period=range&method=Events.getNameFromCategoryId&idSubtable=2&module=API&showColumns=label,nb_events&filter_limit=9999&date=',
      bulkRequest:
        'https://stats.data.gouv.fr/index.php?module=API&method=API.getBulkRequest&format=json',
    },
    tracker: 'https://stats.data.gouv.fr/piwik.php',
  },
  monitoring: 'https://api.uptimerobot.com/v2/getMonitors',
  egapro: {
    index: 'https://egapro.travail.gouv.fr/api/search',
    representation:
      'https://egapro.travail.gouv.fr/api/representation-equilibree/search',
    site: 'https://egapro.travail.gouv.fr',
  },
  certifications: {
    rge: {
      api: 'https://data.ademe.fr/data-fair/api/v1/datasets/liste-des-entreprises-rge-2/lines/',
      site: 'https://france-renov.gouv.fr/annuaire-rge',
    },
    bio: {
      site: 'https://annuaire.agencebio.org/',
      entreprise: 'https://annuaire.agencebio.org/fiche/',
      api: 'https://opendata.agencebio.org/api/gouv/operateurs/',
    },
    entrepreneurSpectacles: {
      ods: {
        metadata:
          'https://data.culture.gouv.fr/api/datasets/1.0/search/?q=declarations-des-entrepreneurs-de-spectacles-vivants',
        search:
          'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=declarations-des-entrepreneurs-de-spectacles-vivants',
      },
    },
  },
  association: 'https://rncs-proxy.api.gouv.fr/association/',
  rne: {
    portail: {
      pdf: 'https://data.inpi.fr/export/companies',
      entreprise: 'https://data.inpi.fr/entreprises/',
      account: 'https://data.inpi.fr/register',
    },
    proxy: {
      rne: 'https://rncs-proxy.api.gouv.fr/rne/',
    },
  },
  rncs: {
    proxy: {
      imr: 'https://rncs-proxy.api.gouv.fr/imr/',
    },
  },
  rnm: 'https://api-rnm.artisanat.fr/v2/entreprises/',
  sireneInsee: {
    auth: 'https://api.insee.fr/token',
    avis: 'https://avis-situation-sirene.insee.fr/AvisPdf.action',
    siren: 'https://api.insee.fr/entreprises/sirene/V3/siren/',
    siret: 'https://api.insee.fr/entreprises/sirene/V3/siret/',
  },
  rechercheEntreprise: {
    etablissement: 'https://api-annuaire-entreprises.data.gouv.fr/siret?q=',
    rechercheUniteLegale: 'https://recherche-entreprises.api.gouv.fr/search',
    rechercheUniteLegaleStaging:
      'https://staging.recherche-entreprises.api.gouv.fr/search',
    uniteLegale: 'https://api-annuaire-entreprises.data.gouv.fr/siren?q=',
  },
  tva: 'https://rncs-proxy.api.gouv.fr/tva/',
};

export default routes;
