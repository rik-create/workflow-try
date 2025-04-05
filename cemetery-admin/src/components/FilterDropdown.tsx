import React, { useState } from 'react';

const FilterDropdown: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
    // Implement filter functionality here
    console.log('Selected filter:', event.target.value);
  };

  return (
    <div className="filter-dropdown">
      <label htmlFor="filter">Filter Lots:</label>
      <select id="filter" value={selectedFilter} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="available">Available</option>
        <option value="reserved">Reserved</option>
        <option value="sold">Sold</option>
        {/* Add more filter options as needed */}
      </select>
    </div>
  );
};

export default FilterDropdown;
