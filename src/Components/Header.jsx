// components/Header.jsx
import React from 'react';
import { Search, ShoppingCart, User, Gift, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useSearch } from '../contexts/SearchContext';

const Header = () => {
  const navigate = useNavigate();
  const { getCartItemsCount } = useCart();
  const { searchQuery, updateSearchQuery, clearSearchQuery } = useSearch();

  const cartItemsCount = getCartItemsCount();

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleSearchChange = (e) => {
    updateSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    clearSearchQuery();
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <Gift className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">ShopEaster</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products by name, category, or brand..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Cart and Profile */}
          <div className="flex items-center space-x-4">
            <button
              className="relative p-2 hover:bg-gray-100 rounded-full transition-all"
              onClick={handleCartClick}
            >
              <ShoppingCart className="h-6 w-6 text-gray-700 cursor-pointer" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;