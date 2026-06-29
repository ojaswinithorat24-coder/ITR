function Product() {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: "₹69,999",
      rating: "4.6 ★",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: "₹54,999",
      rating: "4.5 ★",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Boat Headphones",
      price: "₹1,999",
      rating: "4.3 ★",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />

            <h2 className="text-xl font-semibold mt-3">
              {product.name}
            </h2>

            <p className="text-green-600 font-bold mt-2">
              {product.price}
            </p>

            <p className="bg-green-600 text-white inline-block px-2 py-1 rounded mt-2">
              {product.rating}
            </p>

            <button className="w-full bg-yellow-400 hover:bg-yellow-500 mt-4 py-2 rounded font-semibold">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;