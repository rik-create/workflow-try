import React from 'react';

interface LotPolygonProps {
  status: string;
  coordinates: number[][];
}

const LotPolygon: React.FC<LotPolygonProps> = ({ status, coordinates }) => {
  const getColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'green';
      case 'Reserved':
        return 'yellow';
      case 'Sold':
        return 'red';
      default:
        return 'gray';
    }
  };

  const color = getColor(status);

  return (
    <polygon
      points={coordinates.map(coord => coord.join(',')).join(' ')}
      fill={color}
      stroke="black"
      strokeWidth="1"
    />
  );
};

export default LotPolygon;
