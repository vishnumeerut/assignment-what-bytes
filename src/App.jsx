
import './App.css'
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <Sidebar />
          {/* Your main content area */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Products</h2>
            {/* Product grid or list would go here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
