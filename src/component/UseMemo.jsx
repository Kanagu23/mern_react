import React, { useState, useMemo } from 'react';

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  // Expensive calculation: factorial
  const factorial = useMemo(() => {
    console.log('Calculating factorial...');
    let result = 1;
    for (let i = 1; i <= count; i++) {
      result *= i;
    }
    return result;
  }, [count]); // Only recalculates when `count` changes

  return (
    <div style={{ padding: '20px' }}>
      <h3>Factorial of {count} is: {factorial}</h3>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setToggle(!toggle)}>
        Toggle ({toggle.toString()})
      </button>
    </div>
  );
};

export default ExpensiveComponent;
