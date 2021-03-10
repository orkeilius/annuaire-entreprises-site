import React from 'react';
import InformationTooltip from '../information-tooltip';
import { Tag } from '../tag';

const IsActiveTag: React.FC<{ isActive: boolean | null }> = ({ isActive }) => (
  <>
    {isActive === null ? (
      <>
        <InformationTooltip
          label="L'INSEE ne fournit pas les
            informations nécessaires pour savoir si cette entité est en activité
            ou si elle est fermée."
        >
          <Tag className="unknown">Etat inconnu</Tag>
        </InformationTooltip>
      </>
    ) : isActive ? (
      <Tag className="open">en activité</Tag>
    ) : (
      <Tag className="closed">fermé</Tag>
    )}
  </>
);

export default IsActiveTag;
