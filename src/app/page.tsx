export default function Home() {
  return (
    <main className="p-8 space-y-10">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white rounded-xl p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to TechNest</h1>
        <p className="text-lg">Your one-stop shop for premium gadgets and accessories!</p>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="border p-4 rounded-lg shadow hover:shadow-md transition">
            <img src="products/hp.jpg" alt="Headphones" className="w-full h-48 object-cover rounded" />
            <h3 className="text-lg font-medium mt-2">Wireless Headphones</h3>
            <p className="text-gray-600">$79.99</p>
          </div>
          <div className="border p-4 rounded-lg shadow hover:shadow-md transition">
            <img src="products/keyb.jpg" alt="Keyboard" className="w-full h-48 object-cover rounded" />
            <h3 className="text-lg font-medium mt-2">Mechanical Keyboard</h3>
            <p className="text-gray-600">$59.99</p>
          </div>
          <div className="border p-4 rounded-lg shadow hover:shadow-md transition">
            <img src="products/watch.jpg" alt="Smartwatch" className="w-full h-48 object-cover rounded" />
            <h3 className="text-lg font-medium mt-2">Smartwatch Pro</h3>
            <p className="text-gray-600">$129.99</p>
          </div>
        </div>
      </section>
    </main>
  );
}
