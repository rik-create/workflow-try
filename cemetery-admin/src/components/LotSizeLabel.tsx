import React from 'react';

interface LotSizeLabelProps {
  size: string;
}

const LotSizeLabel: React.FC<LotSizeLabelProps> = ({ size }) => {
  return <div className="lot-size-label">Lot Size: {size}</div>;
};

export default LotSizeLabel;
