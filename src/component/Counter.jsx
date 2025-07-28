// CounterComponent.js
import React from 'react';
import useCounter from '../hooks/UseCounter';

const CounterComponent = () => {
  const { count, increment, decrement, reset } = useCounter(1000);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Count: {count}</h2>
      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement}>➖ Decrement</button>
      <button onClick={reset}>🔄 Reset</button>
    </div>
  );
};

export default CounterComponent;
