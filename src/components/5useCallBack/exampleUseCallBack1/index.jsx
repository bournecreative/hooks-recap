import { useState, useCallback } from "react";
import { Target } from "./index2";

export const ExampleUseCallBack1 = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, [setCount]);
  return (
    <div>
      <Target increment={increment} />

      <div>From Parent Component: {count}</div>
    </div>
  );
};
