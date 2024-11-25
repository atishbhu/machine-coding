import "../App.css";

const Product = (props) => {
  const { product, idx, deleteProduct } = props;
  const { title, image, category, rating, price } = product;
  return (
    <div className="product-container">
      <div>
        <img className="product-image" src={image} alt={title} />
      </div>
      <div>{title}</div>
      <div>{price}</div>
      <button onClick={() => deleteProduct(idx)}>Delete Product</button>
    </div>
  );
};

export default Product;
