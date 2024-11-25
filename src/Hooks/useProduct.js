import { useEffect, useState } from "react";

const useProduct = (isCategory, category) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const url = isCategory
        ? `https://fakestoreapi.com/products/category/${category}`
        : "https://fakestoreapi.com/products";
      const res = await fetch(url);
      const response = await res.json();
      setProduct(response);
    } catch {
      setError("somethings went wrong");
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = (idx) => {
    const newProduct = [...products];
    newProduct.splice(idx, 1);
    setProduct(newProduct);
  };

  useEffect(() => {
    fetchProduct();
  }, [category]);

  return { products, loading, error, deleteProduct };
};

export { useProduct };
