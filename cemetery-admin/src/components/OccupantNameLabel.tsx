import React from 'react';

interface OccupantNameLabelProps {
  name: string;
}

const OccupantNameLabel: React.FC<OccupantNameLabelProps> = ({ name }) => {
  return <div className="occupant-name-label">Occupant Name: {name}</div>;
};

export default OccupantNameLabel;
