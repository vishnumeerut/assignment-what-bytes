
import './App.css'




// In your main App.js or similar
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartDetails from './pages/Cart/CartDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;