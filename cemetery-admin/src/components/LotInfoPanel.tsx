import React from 'react';
import LotIDLabel from './LotIDLabel';
import LotSizeLabel from './LotSizeLabel';
import LotCategoryLabel from './LotCategoryLabel';
import LotStatusIndicator from './LotStatusIndicator';
import OccupantNameLabel from './OccupantNameLabel';
import OwnerLink from './OwnerLink';
import SalesLink from './SalesLink';
import EditLotButton from './EditLotButton';
import InitiateSaleButton from './InitiateSaleButton';

interface LotInfoPanelProps {
  lot: {
    id: string;
    size: string;
    category: string;
    status: string;
    occupantName: string;
    ownerId: string;
    salesId: string;
  };
}

const LotInfoPanel: React.FC<LotInfoPanelProps> = ({ lot }) => {
  return (
    <div className="lot-info-panel">
      <LotIDLabel id={lot.id} />
      <LotSizeLabel size={lot.size} />
      <LotCategoryLabel category={lot.category} />
      <LotStatusIndicator status={lot.status} />
      <OccupantNameLabel name={lot.occupantName} />
      <OwnerLink ownerId={lot.ownerId} />
      <SalesLink salesId={lot.salesId} />
      <EditLotButton lotId={lot.id} />
      <InitiateSaleButton lotId={lot.id} />
    </div>
  );
};

export default LotInfoPanel;
