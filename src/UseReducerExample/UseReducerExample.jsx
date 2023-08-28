import { useReducer } from "react";

function reducer(count, action) {
  switch (action.type) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    default:
      throw new Error(`Unexpected action ${action.type}`);
  }
}

function MyApp() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <div>The Count is {count}</div>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default MyApp;
