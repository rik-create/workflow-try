import React from 'react';

interface OwnerLinkProps {
  ownerId: string;
}

const OwnerLink: React.FC<OwnerLinkProps> = ({ ownerId }) => {
  const handleClick = () => {
    // Navigate to the owner/customer record
    window.location.href = `/owner/${ownerId}`;
  };

  return (
    <button className="owner-link" onClick={handleClick}>
      View Owner
    </button>
  );
};

export default OwnerLink;
