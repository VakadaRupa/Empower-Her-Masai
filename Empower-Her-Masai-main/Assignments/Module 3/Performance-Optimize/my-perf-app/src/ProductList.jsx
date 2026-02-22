import React from 'react';

const ProductList = ({ products, onSelect }) => {
  // This will log on every parent render unless React.memo is used
  // But because of useCallback, the 'onSelect' prop is referentially stable.
  console.log("%c [Child] Rendering ProductList", "color: #3498db");

  return (
    <div className="product-list">
      <h3>Available Products</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ margin: '10px 0' }}>
            <span>{product.name} - <strong>${product.price}</strong></span>
            <button 
              onClick={() => onSelect(product.name)}
              style={{ marginLeft: '10px', cursor: 'pointer' }}
            >
              Select
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;