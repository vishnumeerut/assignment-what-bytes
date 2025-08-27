import React, { useState, useEffect } from 'react';
import { Filter, X, Sliders } from 'lucide-react';

const Sidebar = () => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 300],
    brand: ''
  });

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Sample categories and brands
  const categories = ['electronics', 'clothing', 'books', 'home', 'sports'];
  const brands = ['TechCorp', 'FashionBrand', 'TechBooks', 'HomeEssentials', 'SportGear'];

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      priceRange: [0, 300],
      brand: ''
    });
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  // Sidebar content component to avoid duplication
  const SidebarContent = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm h-full overflow-y-auto">
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
                type="radio"
                name="category"
                value={category}
                checked={filters.category === category}
                onChange={(e) => updateFilter('category', e.target.value)}
                className="mr-3 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="capitalize text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="300"
            value={filters.priceRange[1]}
            onChange={(e) => updateFilter('priceRange', [0, parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>${filters.priceRange[1]}</span>
          </div>
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
                checked={filters.brand === brand}
                onChange={(e) => updateFilter('brand', e.target.checked ? brand : '')}
                className="mr-3 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={clearFilters}
        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );

  // Mobile filter button and overlay sidebar
  if (isMobile) {
    return (
      <>
        {/* Mobile filter button */}
        <button
          onClick={toggleMobileSidebar}
          className="md:hidden fixed bottom-6 right-6 z-40 bg-indigo-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        >
          <Sliders className="h-6 w-6" />
        </button>

        {/* Mobile sidebar overlay */}
        {isMobileSidebarOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={toggleMobileSidebar}
            ></div>
            
            {/* Sidebar */}
            <div className="relative bg-white w-80 h-full overflow-y-auto transform transition-transform duration-300 z-50">
              <div className="sticky top-0 bg-white z-10 p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-bold">Filters</h2>
                <button onClick={toggleMobileSidebar}>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="p-4">
                <SidebarContent />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // Desktop sidebar
  return (
    <aside className="w-64 h-fit sticky top-20">
      <SidebarContent />
    </aside>
  );
};

export default Sidebar;