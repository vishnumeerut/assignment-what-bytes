// contexts/SearchContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Create the context
const SearchContext = createContext();

// Search provider component
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  };

  const clearSearchQuery = () => {
    setSearchQuery('');
  };

  // Value object to be provided
  const value = {
    searchQuery,
    updateSearchQuery,
    clearSearchQuery
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook to use the search context
export const useSearch = () => {
  const context = useContext(SearchContext);
  
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  
  return context;
};