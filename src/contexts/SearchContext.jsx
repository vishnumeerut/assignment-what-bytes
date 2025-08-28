// contexts/SearchContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Create the context
const SearchContext = createContext();

// Search provider component
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [brandFilter, setBrandFilter] = useState('');

  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  };

  const updatePriceRange = (range) => {
    setPriceRange(range);
  };

  const updateCategoryFilter = (category) => {
    setCategoryFilter(category);
  };

  const updateBrandFilter = (brand) => {
    setBrandFilter(brand);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setPriceRange([0, 300]);
    setCategoryFilter('');
    setBrandFilter('');
  };

  // Value object to be provided
  const value = {
    searchQuery,
    priceRange,
    categoryFilter,
    brandFilter,
    updateSearchQuery,
    updatePriceRange,
    updateCategoryFilter,
    updateBrandFilter,
    clearAllFilters
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