import { useRef, useState } from "react";

export const ExampleUseRef3 = () => {
  const initialCount = useRef(10);
  const [count, setCount] = useState(initialCount.current);
  console.log("component has rendered");
  return (
    <div>
      <div>InitialCount: {initialCount.current}</div>
      <div>Count: {count}</div>
      <div>
        <button
          className={"bg-blue-500"}
          onClick={() => setCount((c) => c + 1)}
        >
          Increment with renders
        </button>
      </div>
      <div>
        <button
          onClick={() => (initialCount.current = initialCount.current + 1)}
        >
          Increment with no renders
        </button>
      </div>
    </div>
  );
};
