import { useEffect, useState } from "react";
import Product from "./Product";
import "../App.css";
import { useProduct } from "../Hooks/useProduct";

const ProductList = () => {
  const { products, loading, error } = useProduct();
  return (
    <div className="product-wrapper">
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          {products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </>
      )}
    </div>
  );
};

export default ProductList;
