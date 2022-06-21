import React, { memo, useState, useCallback } from 'react';

const UseCallbackexample = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(Math.floor(Math.random() * 100));
  }, []);

  return (
    <div>
      Count: {count}
      <br />
      <Increment increment={increment} />
      <br />
      <br />
      <Decrement increment={increment} />
      <br />
    </div>
  );
};

const Increment = memo((props) => {
  console.log('increment rendered');
  return <button onClick={props.increment}>Increment</button>;
});

const Decrement = memo((props) => {
  console.log('increment Decrement');
  return <button onClick={props.increment}>Decrement</button>;
});

export default UseCallbackexample;
