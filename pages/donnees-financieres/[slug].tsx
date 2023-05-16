import { GetServerSideProps } from 'next';
import React from 'react';
import { AgregatsComptableCollectivite } from '#components/donnees-financieres/agregats-comptable-collectivite';
import { BilansFinanciersSection } from '#components/donnees-financieres/bilans-financiers';
import Meta from '#components/meta';
import Title, { FICHE } from '#components/title-section';
import {
  getDonneesFinancieresFromSlug,
  IDonneesFinancieres,
} from '#models/donnees-financieres';
import { isCollectiviteTerritoriale } from '#models/index';
import { getCompanyPageTitle } from '#utils/helpers/get-company-page-title';
import extractParamsFromContext from '#utils/server-side-props-helper/extract-params-from-context';
import {
  IPropsWithMetadata,
  postServerSideProps,
} from '#utils/server-side-props-helper/post-server-side-props';
import { NextPageWithLayout } from 'pages/_app';

interface IProps extends IPropsWithMetadata, IDonneesFinancieres {}

const FinancePage: NextPageWithLayout<IProps> = ({
  uniteLegale,
  bilansFinanciers,
  agregatsComptableCollectivite,
  metadata: { session },
}) => {
  return (
    <>
      <Meta
        title={`Données financières - ${getCompanyPageTitle(uniteLegale)}`}
        noIndex={true}
      />
      <div className="content-container">
        <Title
          ficheType={FICHE.FINANCES}
          uniteLegale={uniteLegale}
          session={session}
        />
        <BilansFinanciersSection
          bilansFinanciers={bilansFinanciers}
          uniteLegale={uniteLegale}
        />
        {isCollectiviteTerritoriale(uniteLegale) && (
          <AgregatsComptableCollectivite
            agregatsComptableCollectivite={agregatsComptableCollectivite}
            uniteLegale={uniteLegale}
          />
        )}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = postServerSideProps(
  async (context) => {
    const { slug } = extractParamsFromContext(context);

    const {
      uniteLegale,
      bilansFinanciers,
      agregatsComptableCollectivite = [],
    } = await getDonneesFinancieresFromSlug(slug);

    return {
      props: {
        agregatsComptableCollectivite,
        uniteLegale,
        bilansFinanciers,
        metadata: { useReact: true },
      },
    };
  }
);

export default FinancePage;
