// src/components/SearchBar.jsx
import React from "react";

const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search by name..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;
