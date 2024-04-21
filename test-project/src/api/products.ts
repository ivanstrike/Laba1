import { Product } from '../types/product';

const BASE_URL = 'http://localhost:5000/api'; // Замените на ваш адрес сервера

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`https://localhost:7033/api/Products
  `);

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return response.json();
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }

  return response.json();
};
