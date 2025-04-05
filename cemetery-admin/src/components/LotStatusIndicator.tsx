import React from 'react';

interface LotStatusIndicatorProps {
  status: string;
}

const LotStatusIndicator: React.FC<LotStatusIndicatorProps> = ({ status }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'green';
      case 'Reserved':
        return 'yellow';
      case 'Sold':
        return 'red';
      case 'Pending Sale':
        return 'orange';
      default:
        return 'gray';
    }
  };

  const color = getStatusColor(status);

  return (
    <div className="lot-status-indicator" style={{ color }}>
      Status: {status}
    </div>
  );
};

export default LotStatusIndicator;
