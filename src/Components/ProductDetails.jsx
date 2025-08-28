// components/ProductDetails.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { getProductById } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Get product from dummy data
  const product = getProductById(id);

  // If product not found, show error
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Add the product to cart with the selected quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Products
        </button>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="flex flex-col">
              <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-2">
                <span className="text-sm text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full capitalize">
                  {product.category}
                </span>
                <h1 className="text-2xl font-bold text-gray-900 mt-2">{product.title}</h1>
                <p className="text-sm text-gray-500">{product.brand}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center my-4">
                <div className="flex">{renderStars(product.rating)}</div>
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} (124 reviews)
                </span>
              </div>

              {/* Price */}
              <div className="my-4">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                <span className="ml-2 text-sm text-green-600">In stock (15 available)</span>
              </div>

              {/* Description */}
              <div className="my-4">
                <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>

              {/* Features */}
              <div className="my-4">
                <h3 className="font-semibold text-gray-900 mb-2">Features</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>High quality materials</li>
                  <li>30-day money back guarantee</li>
                  <li>Free shipping on orders over $50</li>
                </ul>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="font-medium text-gray-900">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      className="p-2 text-gray-600 hover:text-indigo-600"
                    >
                      -
                    </button>
                    <span className="px-4 py-2">{quantity}</span>
                    <button
                      onClick={() => setQuantity(prev => prev + 1)}
                      className="p-2 text-gray-600 hover:text-indigo-600"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  <ShoppingCart className="h-5 w-5 mr-2 cursor-pointer"  />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;