// components/CartDetails.js
import React from 'react';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

const CartDetails = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, clearCart, getCartTotal } = useCart();

  // Calculate total items
  const totalItems = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Shopping
          </button>
          
          <div className="flex flex-col items-center justify-center py-12">
            <ShoppingBag className="h-24 w-24 text-gray-300 mb-6" />
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Start shopping to add items to your cart</p>
            <button
              onClick={() => navigate('/')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Shopping
        </button>

        <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart ({totalItems} items)</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Cart Items</h2>
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-800 text-sm font-medium cursor-pointer"
                >
                  Clear Cart
                </button>
              </div>

              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item.id} className="py-6 first:pt-0 last:pb-0">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center">
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center mr-4 mb-4 sm:mb-0">
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <span className="text-2xl">📦</span>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 mb-4 sm:mb-0">
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{item.brand}</p>
                        <p className="text-indigo-600 font-bold">${item.price.toFixed(2)}</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3 mb-4 sm:mb-0 sm:mr-6">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-md hover:bg-gray-100 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4 cursor-pointer" />
                        </button>
                        
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-md hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="h-4 w-4 cursor-pointer" />
                        </button>
                      </div>

                      {/* Item Total and Remove */}
                      <div className="text-right">
                        <p className="font-bold text-gray-900 mb-2">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-800 p-1 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                  <span className="font-medium">${getCartTotal().toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">$0.00</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(getCartTotal() * 0.08).toFixed(2)}</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${(getCartTotal() * 1.08).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button onClick={() => navigate("/")} className="w-full cursor-pointer  bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition-colors mb-4">
                Proceed to Checkout
              </button>
              
              <button
                onClick={() => navigate('/')}
                className="w-full bg-gray-100 cursor-pointer hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;