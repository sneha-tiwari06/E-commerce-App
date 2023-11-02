// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import productsData from './products.json';

function App() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [filter, setFilter] = useState('none');

  useEffect(() => {
    setProducts(productsData);
    setSortedProducts(productsData);
  }, []);

  const handleSortChange = (e) => {
    const value = e.target.value;
    let sorted = [...products];
    if (value === 'lowToHigh') {
      sorted = [...products].sort((a, b) => a.price - b.price);
    } else if (value === 'highToLow') {
      sorted = [...products].sort((a, b) => b.price - a.price);
    }
    setSortedProducts(sorted);
    setFilter(value);
  };

  return (
    <div className="App">
      <h1>E-Commerce App</h1>
      <label htmlFor="sort">Sort By Price: </label>
      <select id="sort" value={filter} onChange={handleSortChange}>
        <option value="none">Select</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>
      <div className="product-list">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product">
            {product.image.includes('http') ? (
              <img src={product.image} alt={product.name} />
            ) : (
              <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />
            )}
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
