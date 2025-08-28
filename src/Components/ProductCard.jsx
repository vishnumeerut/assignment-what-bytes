// components/ProductCard.js
import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent navigating to product details
    addToCart(product);
  };

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Product Image - Clickable */}
      <div 
        className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden cursor-pointer"
        onClick={handleProductClick}
      >
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-500 text-center">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-2">
              <span className="text-2xl">📦</span>
            </div>
            <span className="text-sm">Product Image</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 
          className="font-semibold text-gray-900 line-clamp-1 cursor-pointer hover:text-indigo-600"
          onClick={handleProductClick}
        >
          {product.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          {/* Rating */}
          <div className="flex items-center">
            <div className="flex">{renderStars(product.rating)}</div>
            <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
          </div>
          
          {/* Brand */}
          <span className="text-xs text-gray-500">{product.brand}</span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className="flex items-center cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;