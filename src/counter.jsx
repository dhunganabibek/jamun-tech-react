import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  function increment() {
    setCount((count) => count + 1);
    console.log(count);
  }
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Counter;
