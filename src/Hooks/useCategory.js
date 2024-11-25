import { useEffect, useState } from "react";

const useCategory = () => {
  const [categoryData, setCategoryData] = useState([]);

  const fetchCategory = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const response = await res.json();
      setCategoryData(response);
    } catch {
      console.log("errori in fetching category data");
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return { categoryData };
};

export { useCategory };
