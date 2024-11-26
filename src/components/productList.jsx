import { useContext, useEffect, useState } from "react";
import Product from "./Product";
import "../App.css";
import { useProduct } from "../Hooks/useProduct";
import { useCategory } from "../Hooks/useCategory";
import { CartContext } from "../context/CartsContext";
import { Link } from "react-router-dom";

const ProductList = ({ selecteCategory, isCategory, searchText }) => {
  const { products, loading, error, deleteProduct, filterProuct } = useProduct(
    isCategory,
    selecteCategory
  );
  useEffect(() => {
    filterProuct(searchText);
  }, [searchText]);

  return (
    <div className="product-wrapper">
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          {products?.map((product, idx) => (
            <Product
              key={product.id}
              product={product}
              deleteProduct={deleteProduct}
              idx={idx}
            />
          ))}
        </>
      )}
    </div>
  );
};

function ProductWrapper() {
  const { categoryData } = useCategory();
  const [selecteCategory, setSelecategory] = useState(null);
  const [searchText, setSearchText] = useState("");
  const { cart } = useContext(CartContext);

  const handleCategory = (category) => {
    setSelecategory(category);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  console.log("searchText", searchText);

  return (
    <div>
      <div className="flex justify-between">
        <header className="flex justify-between gap-4">
          {categoryData.map((navItem, idx) => (
            <nav key={idx} onClick={() => handleCategory(navItem)}>
              {navItem}
            </nav>
          ))}
          <input
            type="text"
            value={searchText}
            placeholder="search Product"
            onChange={handleSearch}
          />
        </header>
        <Link to="/cart">
          <div className="flex cursor-pointer">
            <span>cart</span>
            {cart?.length && <div>{cart?.length}</div>}
          </div>
        </Link>
      </div>
      <ProductList
        selecteCategory={selecteCategory}
        isCategory={selecteCategory !== null}
        searchText={searchText}
      />
    </div>
  );
}

export default ProductWrapper;
