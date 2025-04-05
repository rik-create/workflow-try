import React from 'react';

interface SalesLinkProps {
  salesId: string;
}

const SalesLink: React.FC<SalesLinkProps> = ({ salesId }) => {
  const handleClick = () => {
    // Navigate to the sales record
    window.location.href = `/sales/${salesId}`;
  };

  return (
    <button className="sales-link" onClick={handleClick}>
      View Sales
    </button>
  );
};

export default SalesLink;
