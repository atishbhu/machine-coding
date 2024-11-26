import { createContext, useReducer } from "react";

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return [...state, action.payload];
      case "REMOVE_ITEM":
        return state.filter((item) => item.id !== action.payload.id);
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };

  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
