export const fetchData = async (query, singnal) => {
  const res = await fetch(`https://restcountries.com/v3.1/name/${query}`, {
    singnal,
  });
  const response = await res.json();
  return response
};
