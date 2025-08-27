import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const {
    image,
    title,
    description,
    rating,
    price,
    brand,
    category
  } = product;

  const handleAddToCart = () => {
    console.log(`Added ${title} to cart`);
    // You would typically dispatch to a cart context or state management here
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
      {/* Product Image */}
      <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
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
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-900 line-clamp-1">{title}</h3>
          <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full capitalize">
            {category}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between mb-3">
          {/* Rating */}
          <div className="flex items-center">
            <div className="flex">{renderStars(rating)}</div>
            <span className="ml-2 text-sm text-gray-600">({rating})</span>
          </div>
          
          {/* Brand */}
          <span className="text-xs text-gray-500">{brand}</span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg text-gray-900">
            ${price.toFixed(2)}
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