import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "addTodo":
      return {
        todos: [...state.todos, { text: action.payload, complete: false }],
        todoCount: state.todoCount + 1,
      };
    case "updateStatus":
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.payload ? { ...t, complete: !t.complete } : t
        ),
        todoCount: state.todoCount,
      };
    default:
      return state;
  }
}

export const ExampleUseReducer2 = () => {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEle = e.target;
    const formInfo = new FormData(formEle);
    const newTodoValue = formInfo.get("newTodo");
    dispatch({
      type: "addTodo",
      payload: newTodoValue,
    });
    formEle.reset();
  };

  const handleClick = (index) => {
    dispatch({
      type: "updateStatus",
      payload: index,
    });
  };

  const renderedTodos = todos.map((t, index) => {
    return (
      <li
        style={{ textDecoration: t.complete ? "line-through" : "" }}
        onClick={() => handleClick(index)}
        key={t.text + index}
      >
        {t.text}
      </li>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="newTodo" />
        <button type="submit">Add Todo</button>
      </form>
      <div>
        <div>Number of Todos: {todoCount}</div>
        <ul>
          {renderedTodos.length > 0
            ? renderedTodos
            : "No tasks todo - go play or read"}
        </ul>
      </div>
    </div>
  );
};
