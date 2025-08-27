import React from 'react';
import ProductCard from './ProductCard';

// Sample product data
const sampleProduct = {
  id: 1,
  title: 'Wireless Headphones',
  price: 99.99,
  category: 'electronics',
  brand: 'TechCorp',
  image: 'https://www.computerhope.com/jargon/j/javascript.png',
  rating: 4.5,
  description: 'High-quality wireless headphones with noise cancellation.'
};

function ProductGrid() {
  // In a real app, this would come from an API or state
  const products = [sampleProduct, sampleProduct, sampleProduct, sampleProduct, sampleProduct, sampleProduct, sampleProduct];
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;