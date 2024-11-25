import { useEffect, useState } from "react";
import Product from "./Product";
import "../App.css";
import { useProduct } from "../Hooks/useProduct";
import { useCategory } from "../Hooks/useCategory";

const ProductList = ({ selecteCategory, isCategory }) => {
  const { products, loading, error, deleteProduct } = useProduct(
    isCategory,
    selecteCategory
  );

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

  const handleCategory = (category) => {
    setSelecategory(category);
  };
  return (
    <div>
      <header>
        {categoryData.map((navItem, idx) => (
          <nav key={idx} onClick={() => handleCategory(navItem)}>
            {navItem}
          </nav>
        ))}
      </header>
      <ProductList
        selecteCategory={selecteCategory}
        isCategory={selecteCategory !== null}
      />
    </div>
  );
}

export default ProductWrapper;
