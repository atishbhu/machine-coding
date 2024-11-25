import { createContext, useReducer } from "react";

export const CounterContext = createContext();

export function CounterProvider({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "RESET":
        return { count: 0 };
      default:
        throw new Error("Unhandled action type: " + action.type);
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <CounterContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}
