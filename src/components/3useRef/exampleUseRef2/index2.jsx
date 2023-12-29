import { useRef } from "react";

export const Target = () => {
  const renders = useRef(0);

  console.log("renders", renders.current++);
  return (
    <div>
      <button>Start</button>
    </div>
  );
};
