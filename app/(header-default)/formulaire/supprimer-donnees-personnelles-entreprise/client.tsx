'use client';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { ConnectionFranceConnect } from '#components/hide-personal-data-request-FC';
import { RenseignerSiren } from '#components/hide-personal-data-request-siren';
import { RequestState } from '#components/hide-personal-data-request-state';
import { postHidePersonalDataRequest } from './actions';

type IProps = {
  franceConnected: boolean;
};

export default function HidePersonalDataPageClient({
  franceConnected,
}: IProps) {
  const [props, formAction] = useFormState(postHidePersonalDataRequest, {});
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);

  return props.uniteLegale ? (
    <>
      <RequestState hidePersonalDataRequest={props.hidePersonalDataRequest} />
    </>
  ) : (
    <>
      <ConnectionFranceConnect />
      {franceConnected && (
        <>
          <h2>Renseigner le SIREN de votre entreprise</h2>
          <RenseignerSiren formAction={formAction} />
        </>
      )}
    </>
  );
}
