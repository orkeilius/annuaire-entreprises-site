import { GetServerSideProps } from 'next';
import React from 'react';
import ElusSection from '#components/dirigeants-section/elus-section';
import Meta from '#components/meta';
import Title, { FICHE } from '#components/title-section';
import { IUniteLegale } from '#models/index';
import { getNomComplet } from '#models/statut-diffusion';
import { getUniteLegaleFromSlug } from '#models/unite-legale';
import extractParamsFromContext from '#utils/server-side-props-helper/extract-params-from-context';
import {
  IPropsWithMetadata,
  postServerSideProps,
} from '#utils/server-side-props-helper/post-server-side-props';
import { NextPageWithLayout } from 'pages/_app';

interface IProps extends IPropsWithMetadata {
  uniteLegale: IUniteLegale;
}

const ElusPage: NextPageWithLayout<IProps> = ({
  uniteLegale,
  metadata: { session },
}) => {
  return (
    <>
      <Meta
        title={`Élus de ${getNomComplet(uniteLegale)} - ${uniteLegale.siren}`}
        canonical={`https://annuaire-entreprises.data.gouv.fr/elus/${uniteLegale.siren}`}
        noIndex={true}
      />
      <div className="content-container">
        <Title
          uniteLegale={uniteLegale}
          ficheType={FICHE.ELUS}
          session={session}
        />
        <ElusSection uniteLegale={uniteLegale} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = postServerSideProps(
  async (context) => {
    const { slug } = extractParamsFromContext(context);
    const uniteLegale = await getUniteLegaleFromSlug(slug);

    return {
      props: { uniteLegale },
    };
  }
);

export default ElusPage;
