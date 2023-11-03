// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import productsData from "./products.json";
import Login from "./components/login";
import Register from "./components/register";
// import ShoppingCart from "./components/shoppingCart";

function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [filter, setFilter] = useState("none");
  const [cart, setCart] = useState([]);
  const [existingUsers, setExistingUsers] = useState([]);

  useEffect(() => {
    setProducts(productsData);
    setSortedProducts(productsData);
  }, []);

  const handleSortChange = (e) => {
    const value = e.target.value;
    let sorted = [...products];
    if (value === "lowToHigh") {
      sorted = [...products].sort((a, b) => a.price - b.price);
    } else if (value === "highToLow") {
      sorted = [...products].sort((a, b) => b.price - a.price);
    } else if (value === "none") {
      sorted = [...products];
    } else {
      sorted = [...products].filter((product) => product.category === value);
    }
    setSortedProducts(sorted);
    setFilter(value);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    window.alert(`${product.name} added to cart successfully!`);
  };

  const handleRegister = (username) => {
    if (existingUsers.includes(username)) {
      window.alert("User already exists. Please choose a different username.");
    } else {
      setExistingUsers([...existingUsers, username]);
      window.alert("Registration successful!");
    }
  };

  return (
    <div className="App">
      {user ? (
        <>
          <div className="sidebar">
            <label htmlFor="sort"><h4>Sort By</h4></label>
            <select id="sort" value={filter} onChange={handleSortChange}>
              <option value="none">Select</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
            <label htmlFor="sort"><h4>Category</h4></label>
            <select id="sort" value={filter} onChange={handleSortChange}>
              <option value="none">Select</option>
              <option value="Watches">Watches</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
            </select>
            <div className="shopping-cart">
              <h2>Shopping Cart</h2>
              <table>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index} className="cart-item">
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="main-content">
            <h1 style={{ textAlign: "center" }}>Welcome, {user.name}!</h1>

            <div className="product-list">
              {sortedProducts.map((product) => (
                <div key={product.id} className="product">
                  {product.image.includes("http") ? (
                    <img src={product.image} alt={product.name} />
                  ) : (
                    <img
                      src={process.env.PUBLIC_URL + product.image}
                      alt={product.name}
                    />
                  )}
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <p>{product.category}</p>
                  <button onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button
            className="logout-button"
            style={{ margin: "0 auto", display: "block" }}
            onClick={() => setUser(null)}
          >
            Logout
          </button>
        </>
      ) : (
        <div className="auth-container">
          <Login setUser={setUser} />
          <Register existingUsers={existingUsers} onRegister={handleRegister} />
        </div>
      )}
    </div>
  );
}

export default App;
