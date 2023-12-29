import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return (state = state + 1);
    case "decrement":
      return (state = state - 1);
    case "addTo":
      return (state = state + action.payload);
    default:
      state;
  }
}

export const ExampleUseReducer1 = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  const handleIncrement = () => {
    dispatch({
      type: "increment",
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: "decrement",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEl = e.target;
    const formInfo = new FormData(formEl);
    const valToAdd = parseInt(formInfo.get("valueToAdd"));
    dispatch({
      type: "addTo",
      payload: valToAdd,
    });
    formEl.reset();
  };

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="number" name="valueToAdd" />
          <button type="submit">Add to Count</button>
        </form>
      </div>
    </div>
  );
};
