import React from 'react';

interface EditLotButtonProps {
  lotId: string;
}

const EditLotButton: React.FC<EditLotButtonProps> = ({ lotId }) => {
  const handleEdit = () => {
    // Handle the edit lot action
    console.log(`Editing lot with ID: ${lotId}`);
  };

  return (
    <button onClick={handleEdit} className="edit-lot-button">
      Edit Lot
    </button>
  );
};

export default EditLotButton;
