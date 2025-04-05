import React, { useState } from 'react';

const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Search for a lot"
      className="search-input"
    />
  );
};

export default SearchInput;
