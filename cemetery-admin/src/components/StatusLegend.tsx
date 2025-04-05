import React from 'react';

const StatusLegend: React.FC = () => {
  return (
    <div className="status-legend">
      <h3>Status Legend</h3>
      <ul>
        <li><span className="legend-color available"></span> Available</li>
        <li><span className="legend-color reserved"></span> Reserved</li>
        <li><span className="legend-color sold"></span> Sold</li>
        <li><span className="legend-color pending-sale"></span> Pending Sale</li>
      </ul>
    </div>
  );
};

export default StatusLegend;
