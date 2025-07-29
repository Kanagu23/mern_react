import React, { useCallback, useState } from "react";

export const UseCallbackComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {

    console.log('Clicked!');
  }, []); // no dependencies → stable function

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </>
  );
};

const Child = React.memo(({ onClick }) => {
  console.log('Child re-rendered');
  return <button onClick={onClick}>Child Button</button>;
});
