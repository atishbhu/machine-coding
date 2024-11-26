import { useContext } from "react";
import { CartContext } from "../context/CartsContext";

function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: id } });
  };

  return (
    <>
      <h1>Cart Page</h1>
      <div className="flex-col gap-2 p-2">
        {cart.map((item) => (
          <div className="flex border-2 border-black rounded-sm p-10 my-2" key={item.id}>
            <img className="w-[100px]" src={item.image} alt={item.title} />
            <div>
              <div>{item.title}</div>
              <div>{item.price}</div>
            </div>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
