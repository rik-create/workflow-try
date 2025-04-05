import React from 'react';

const ZoomOutButton: React.FC = () => {
  const handleZoomOut = () => {
    // Implement zoom out functionality here
  };

  return (
    <button onClick={handleZoomOut} className="zoom-out-button">
      -
    </button>
  );
};

export default ZoomOutButton;
