import { useEffect, useState } from "react";

function Product() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  // Fetch Products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // Fetch Categories
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  // Add To Cart
  const addToCart = (product) => {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Remove From Cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Filter Products
  const filteredProducts = products
    .filter(
      (product) =>
        category === "all" ||
        product.category === category
    )
    .filter((product) =>
      product.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          marginRight: "10px",
        }}
      />

      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: "8px" }}
      >
        <option value="all">All Categories</option>

        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Products */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "220px",
              borderRadius: "10px",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              width="120"
              height="120"
            />

            <h4>
              {product.title.slice(0, 30)}...
            </h4>

            <p>₹ {product.price}</p>

            <button
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      <hr />

      {/* Cart */}
      <h2>Cart 🛒</h2>

      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              width="50"
            />

            <span>
              {item.title.slice(0, 20)}...
            </span>

            <span>Qty: {item.qty}</span>

            <button
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Product;
