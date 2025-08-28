// components/ProductGrid.jsx
import React from 'react';
import ProductCard from './ProductCard';
import { products, searchProducts } from '../data/products';
import { useSearch } from '../contexts/SearchContext';

const ProductGrid = () => {
  const { searchQuery } = useSearch();
  
  // Filter products based on search query
  const filteredProducts = searchQuery ? searchProducts(searchQuery) : products;

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'} 
          <span className="text-sm font-normal text-gray-500 ml-2">
            ({filteredProducts.length} products)
          </span>
        </h2>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
          <p className="text-gray-500">Try different search terms or browse all products</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Load More Button (for show) */}
          {!searchQuery && (
            <div className="text-center mt-12">
              <button
                onClick={() => console.log('Loading more products...')}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Load More Products
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductGrid;