import { useRef, useEffect } from "react";

export const ExampleUseRef1 = () => {
  const inputTarget = useRef(null);

  useEffect(() => {
    inputTarget.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputTarget} name="name" />
      <button>Start</button>
    </div>
  );
};
