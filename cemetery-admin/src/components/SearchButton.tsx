import React from 'react';

const SearchButton: React.FC = () => {
  const handleSearch = () => {
    // Implement search functionality here
    console.log('Search button clicked');
  };

  return (
    <button onClick={handleSearch} className="search-button">
      Search
    </button>
  );
};

export default SearchButton;
