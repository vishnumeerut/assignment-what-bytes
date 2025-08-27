import Sidebar from "../Components/Sidebar";
import ProductGrid from "../Components/ProductGrid";

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar />
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Products</h2>
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
