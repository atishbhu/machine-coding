import { useEffect, useState } from "react";

const useProduct = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProduct = async () => {
    setLoading(true);
    try{
      const res = await fetch("https://fakestoreapi.com/products")
      const response = await res.json();
      setProduct(response)
    }catch {
        setError('somethings went wrong')
    }finally{
        setLoading(false)
    }
  };

  useEffect(() => {
    fetchProduct()
  }, []);

  return { products, loading, error };
};

export { useProduct };
