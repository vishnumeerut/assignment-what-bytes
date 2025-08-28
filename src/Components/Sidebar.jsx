// components/Sidebar.jsx
import React from 'react';
import { Filter, X } from 'lucide-react';
import { products } from '../data/products';
import { useSearch } from '../contexts/SearchContext';

const Sidebar = () => {
  const { 
    priceRange, 
    categoryFilter, 
    brandFilter, 
    updatePriceRange, 
    updateCategoryFilter, 
    updateBrandFilter, 
    clearAllFilters 
  } = useSearch();

  // Get unique categories and brands from products
  const categories = [...new Set(products.map(p => p.category))];
  const brands = [...new Set(products.map(p => p.brand))];

  // Calculate max price for the range slider
  const maxPrice = Math.max(...products.map(p => p.price));
  const sliderMax = Math.ceil(maxPrice / 50) * 50; // Round up to nearest 50

  const handlePriceChange = (value) => {
    updatePriceRange([0, parseInt(value)]);
  };

  const handleCategoryChange = (category) => {
    updateCategoryFilter(category === categoryFilter ? '' : category);
  };

  const handleBrandChange = (brand) => {
    updateBrandFilter(brand === brandFilter ? '' : brand);
  };

  // Check if any filters are active
  const isAnyFilterActive = priceRange[1] < sliderMax || categoryFilter || brandFilter;

  return (
    <aside className="w-64 bg-white p-6 rounded-lg shadow-sm h-fit sticky top-20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg text-gray-900">Filters</h3>
        <Filter className="h-5 w-5 text-gray-500" />
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-3">Categories</h4>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
              <input
                type="checkbox"
                checked={categoryFilter === category}
                onChange={() => handleCategoryChange(category)}
                className="mr-3 text-indigo-600 focus:ring-indigo-500 rounded"
              />
              <span className="capitalize text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max={sliderMax}
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">$0</span>
            <span className="text-sm font-medium text-indigo-600">
              Up to ${priceRange[1]}
            </span>
            <span className="text-sm text-gray-600">${sliderMax}</span>
          </div>
          {priceRange[1] < sliderMax && (
            <div className="text-xs text-indigo-500 bg-indigo-50 p-2 rounded">
              Showing products under ${priceRange[1]}
            </div>
          )}
        </div>
      </div>

      {/* Brands */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-3">Brands</h4>
        <div className="space-y-2">
          {brands.map(brand => (
            <label key={brand} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
              <input
                type="checkbox"
                checked={brandFilter === brand}
                onChange={() => handleBrandChange(brand)}
                className="mr-3 text-indigo-600 focus:ring-indigo-500 rounded"
              />
              <span className="text-sm">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters Button - Only show when filters are active */}
      {isAnyFilterActive && (
        <button
          onClick={clearAllFilters}
          className="w-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
        >
          <X className="h-4 w-4 mr-1" />
          Clear All Filters
        </button>
      )}
    </aside>
  );
};

export default Sidebar;