import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import ProductGrid from "../Components/ProductGrid";

function HomePage () {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex gap-8">
                <Sidebar />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Products</h2>
                  <ProductGrid />
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      );
}

export default HomePage;