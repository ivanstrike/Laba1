
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { Button } from 'react-bootstrap';

const App: React.FC = () => {
  const [showProducts, setShowProducts] = useState(false);

  const handleToggleProducts = () => {
    setShowProducts(!showProducts);
  };

  return (
    <div className="App">
      <center>
        <h1>Product List</h1>
        <Button onClick={handleToggleProducts} variant="primary">
        {showProducts ? 'Hide Products' : 'Show Products'}
        </Button>
        {showProducts && <ProductList />}
      </center>
      
    </div>
  );
};

export default App;
