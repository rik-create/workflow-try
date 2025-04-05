import React from 'react';
import LotPolygon from './LotPolygon';

const MapView: React.FC = () => {
  // Sample data for lots
  const lots = [
    { id: 1, status: 'Available', coordinates: [/* coordinates data */] },
    { id: 2, status: 'Reserved', coordinates: [/* coordinates data */] },
    { id: 3, status: 'Sold', coordinates: [/* coordinates data */] },
    // Add more lots as needed
  ];

  return (
    <div className="map-view">
      {lots.map((lot) => (
        <LotPolygon key={lot.id} status={lot.status} coordinates={lot.coordinates} />
      ))}
    </div>
  );
};

export default MapView;
