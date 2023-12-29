import { useState } from "react";
import { Target } from "./index2";

export const ExampleUseRef2 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Target />
      <button onClick={() => setCount((c) => c + 1)}>++</button>
      <div>count:{count}</div>
    </div>
  );
};
