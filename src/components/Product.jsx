import { useContext } from "react";
import "../App.css";
import { CartContext } from "../context/CartsContext";

const Product = (props) => {
  const { product, idx, deleteProduct } = props;
  const { title, image, category, rating, price } = product;
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  return (
    <div className="product-container">
      <div>
        <img className="product-image" src={image} alt={title} />
      </div>
      <div>{title}</div>
      <div>{price}</div>
      <button onClick={handleAddToCart}>Add to cart</button>
      <button onClick={() => deleteProduct(idx)}>Delete Product</button>
    </div>
  );
};

export default Product;
