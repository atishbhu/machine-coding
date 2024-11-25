import { useContext } from "react";
import { CounterContext } from "../context/CartContext";

function Counter() {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Add</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Dec</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default Counter;
