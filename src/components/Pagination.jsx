import { useEffect, useState } from "react";
import "../App.css";

const Pagination = ({ products }) => {
  const [page, setPage] = useState(1);

  const handlePage = (selectedPage) => {
    if(selectedPage >= 1 && selectedPage <= products?.length / 10) {
       setPage(selectedPage);
    }
  };

  return (
    <div>
      {products?.slice(page * 10 - 10, page * 10).map((item) => (
        <div>
          <span>{item.title}</span>
        </div>
      ))}
      <div>
        <span onClick={() => handlePage(page - 1)}>◀️</span>
        {[...Array(products?.length / 10)].map((__, idx) => (
          <span className="page-number" onClick={() => handlePage(idx + 1)}>
            {idx + 1}
          </span>
        ))}
        <span onClick={() => handlePage(page + 1)}>▶️</span>
      </div>
    </div>
  );
};

const PaginationWrapper = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    if (data && data.products) {
      setProduct(data.products);
    }
    console.log("fata", data);
  };
  return <Pagination products={products} />;
};

export default PaginationWrapper;
