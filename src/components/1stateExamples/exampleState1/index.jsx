import { useState } from "react";

// this would only be called the first time the component runs, only running on the initial value - "price "
const expensiveFunction = (arg) => {
  return arg * 10;
};

// eslint-disable-next-line react/prop-types
export const State1 = ({ price }) => {
  const [count, setCount] = useState(() => expensiveFunction(price));

  const [{ wages1, wages2 }, setWages] = useState({ wages1: 50, wages2: 60 });

  const handleWageIncrease = () => {
    setWages((c) => ({
      ...c,
      wages1: c.wages1 + 100,
    }));
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <hr />

      <button onClick={handleWageIncrease}>Increase Wages</button>
      <div>Wages1: {wages1}</div>
      <div>Wages2: {wages2}</div>
    </div>
  );
};
