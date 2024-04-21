// src/components/ProductList.tsx

import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';
import { Product } from '../types/product';
import ProductCard from './ProductCard';
import './ProductList.css'; // Импортируйте CSS-файл

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(new Error(err as string));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card-container" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
