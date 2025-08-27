// data/products.js
export const products = [
    {
      id: 1,
      title: 'Wireless Headphones',
      price: 99.99,
      category: 'electronics',
      brand: 'TechCorp',
      image: 'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png',
      rating: 4.5,
      description: 'High-quality wireless headphones with noise cancellation.'
    },
    {
      id: 2,
      title: 'Cotton T-Shirt',
      price: 24.99,
      category: 'clothing',
      brand: 'FashionBrand',
      image: 'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png',
      rating: 4.2,
      description: 'Comfortable cotton t-shirt in various colors.'
    },
    {
      id: 3,
      title: 'JavaScript Guide',
      price: 39.99,
      category: 'books',
      brand: 'TechBooks',
      image: 'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png',
      rating: 4.8,
      description: 'Complete guide to modern JavaScript development.'
    },
    {
      id: 4,
      title: 'Smart Watch',
      price: 199.99,
      category: 'electronics',
      brand: 'TechCorp',
      image: 'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png',
      rating: 4.3,
      description: 'Feature-rich smartwatch with health tracking.'
    },
    {
      id: 5,
      title: 'Denim Jeans',
      price: 79.99,
      category: 'clothing',
      brand: 'FashionBrand',
      image: 'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png',
      rating: 4.1,
      description: 'Classic denim jeans with perfect fit.'
    },
    {
      id: 6,
      title: 'React Cookbook',
      price: 49.99,
      category: 'books',
      brand: 'TechBooks',
      image: 'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png',
      rating: 4.7,
      description: 'Advanced React patterns and techniques.'
    }
  ];
  
  // Helper function to get product by ID
  export const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
  };
  
  // Helper function to get products by category
  export const getProductsByCategory = (category) => {
    if (!category) return products;
    return products.filter(product => product.category === category);
  };