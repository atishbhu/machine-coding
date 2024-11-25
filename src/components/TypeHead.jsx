import { useEffect, useState } from "react";
import { fetchData } from "../services/fetchCountryData";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (val) => {
    setSearchText(val);
    if(val) {
        setData(null)
    }
  };

  useEffect(() => {
    const debounceId = setTimeout(() => {
      if (searchText.length) {
        setLoading(true);
        const abortController = new AbortController();
        const singnal = abortController.signal;
        fetchData(searchText, singnal)
          .then((res) => {
            setData(res);
          })
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }
    }, 5000);

    return () => clearTimeout(debounceId);
  }, [searchText]);

  return (
    <div>
      {loading && <div>loading...</div>}
      <input type="search" onChange={(e) => handleChange(e.target.value)} />
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default Search;
