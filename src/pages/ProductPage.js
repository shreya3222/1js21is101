import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductDetails(id);
        setProduct(data);
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return product ? (
    <div className="product-detail">
      <img src={`https://picsum.photos/400?random=${product.uniqueId}`} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.company}</p>
      <p>{product.category}</p>
      <p>${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability ? 'In stock' : 'Out of stock'}</p>
    </div>
  ) : (
    <div>Product not found</div>
  );
};

export default ProductPage;
