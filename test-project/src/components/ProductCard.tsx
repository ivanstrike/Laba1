import React from 'react';
import { Card } from 'react-bootstrap';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          Description: {product.description}
          <br />
          Price: ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
