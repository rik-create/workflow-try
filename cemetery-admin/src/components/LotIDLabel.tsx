import React from 'react';

interface LotIDLabelProps {
  id: string;
}

const LotIDLabel: React.FC<LotIDLabelProps> = ({ id }) => {
  return <div className="lot-id-label">Lot ID: {id}</div>;
};

export default LotIDLabel;
