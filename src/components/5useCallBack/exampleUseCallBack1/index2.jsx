import React from "react";
import { useRef } from "react";

export const Target = React.memo(({ increment }) => {
  const renders = useRef(0);
  console.log("renders", renders.current++);
  return (
    <div>
      <span>
        From CHild Component. The prop passed into this function does not
        change. It is always the same. But because the state of the parent
        component, the child component is rerended. This is un-neccesary as the
        prop is the same - thus the child component should not be re-rendered
      </span>
      <button onClick={increment}>Increment</button>
    </div>
  );
});
