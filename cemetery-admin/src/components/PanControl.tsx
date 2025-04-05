import React from 'react';

const PanControl: React.FC = () => {
  const handlePan = (direction: string) => {
    // Implement pan functionality here
  };

  return (
    <div className="pan-control">
      <button onClick={() => handlePan('up')} className="pan-button">↑</button>
      <button onClick={() => handlePan('down')} className="pan-button">↓</button>
      <button onClick={() => handlePan('left')} className="pan-button">←</button>
      <button onClick={() => handlePan('right')} className="pan-button">→</button>
    </div>
  );
};

export default PanControl;
