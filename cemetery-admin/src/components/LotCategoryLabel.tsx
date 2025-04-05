import React from 'react';

interface LotCategoryLabelProps {
  category: string;
}

const LotCategoryLabel: React.FC<LotCategoryLabelProps> = ({ category }) => {
  return <div className="lot-category-label">Category: {category}</div>;
};

export default LotCategoryLabel;
