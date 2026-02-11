import { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('Add');
  const [results, setResults] = useState([]);

  const handleCalculation = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      alert("Please enter valid numbers");
      return;
    }

    let currentResult = 0;
    if (operation === 'Add') currentResult = n1 + n2;
    else if (operation === 'Subtract') currentResult = n1 - n2;
    else if (operation === 'Multiply') currentResult = n1 * n2;

    // Append the new result to the existing list (spread operator)
    setResults([...results, currentResult]);
    
    // Optional: Clear inputs after calculation
    setNum1('');
    setNum2('');
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Basic Calculator</h2>
      
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
        placeholder="First Number" 
      />
      
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="Add">Add</option>
        <option value="Subtract">Subtract</option>
        <option value="Multiply">Multiply</option>
      </select>

      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
        placeholder="Second Number" 
      />

      <button onClick={handleCalculation} style={{ marginLeft: '10px' }}>
        Perform Action
      </button>

      <hr />
      
      <h3>Result History:</h3>
      <ul>
        {results.map((res, index) => (
          <li key={index}>Result {index + 1}: {res}</li>
        ))}
      </ul>
    </div>
  );
}

export default Calculator;