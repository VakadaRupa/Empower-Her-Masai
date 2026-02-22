import { useState, useMemo, useCallback } from 'react';
import ProductList from './ProductList';

function App() {
  const [count, setCount] = useState(0);
  
  // Mock large data set
  const [products] = useState([
    { id: 1, name: 'Ultra-Wide Monitor', price: 600 },
    { id: 2, name: 'Ergonomic Chair', price: 350 },
    { id: 3, name: 'USB-C Docking Station', price: 120 },
    { id: 4, name: 'Noise Cancelling Headphones', price: 250 },
  ]);

  /**
   * TASK 1: useMemo
   * Prevents re-calculating the sum when 'count' changes.
   */
  const totalPrice = useMemo(() => {
    console.log("%c [Parent] Re-calculating Total Price...", "color: #e67e22; font-weight: bold");
    return products.reduce((sum, item) => sum + item.price, 0);
  }, [products]);

  /**
   * TASK 2: useCallback
   * Memoizes the function so it doesn't get a new memory address on every render.
   */
  const handleSelect = useCallback((name) => {
    console.log(`Product selected: ${name}`);
  }, []);

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', fontFamily: 'system-ui' }}>
      <h1>Vite + React Optimization</h1>
      
      <div style={{ background: '#2c3e50', color: 'white', padding: '20px', borderRadius: '12px' }}>
        <h2>Total: ${totalPrice}</h2>
        
        <div style={{ borderTop: '1px solid #555', paddingTop: '15px' }}>
          <p>Counter Logic (Unrelated to Products):</p>
          <button 
            onClick={() => setCount(c => c + 1)}
            style={{ padding: '8px 16px', fontSize: '1.1rem' }}
          >
            Count is: {count}
          </button>
        </div>
      </div>

      <ProductList products={products} onSelect={handleSelect} />
      
      <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '20px' }}>
        Check the <strong>Browser Console</strong>. You'll see that "Re-calculating Total Price" 
        only appears once on load, even when you click the counter.
      </p>
    </div>
  );
}

export default App;