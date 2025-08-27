
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartDetails from './pages/Cart/CartDetails';
import Header from './Components/Header';
import ProductDetails from './Components/ProductDetails';
import Footer from './Components/Footer';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={

              <HomePage />
            } />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;