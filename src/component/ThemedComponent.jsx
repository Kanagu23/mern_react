// ThemedComponent.js
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import useCounter from '../hooks/UseCounter';

const ThemedComponent = () => {
  const {theme} = useContext(ThemeContext);
const { count, increment, decrement, reset } = useCounter(1000);

  return (
    <div style={{ backgroundColor: theme === 'dark' ? '#333' : '#eee', color: theme === 'dark' ? '#fff' : '#000' }}>
      Current theme: {theme} {count}
    </div>
  );
};

export default ThemedComponent;