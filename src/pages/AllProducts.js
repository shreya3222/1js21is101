import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log('Products fetched:', data); // Debug: Log fetched products
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!products.length) {
    return <div>No products available</div>;
  }

  return (
    <div>
      <div className="filter">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.uniqueId} className="product-item">
            <img src={`https://picsum.photos/200?random=${product.uniqueId}`} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.company}</p>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability ? 'In stock' : 'Out of stock'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
