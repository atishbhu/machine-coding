import { useState, useEffect } from "react";

const Counter = () => {
  const [a, setA] = useState(0);

  useEffect(() => {
    console.log("Abhay");
    return () => {
      console.log("Atish");
    };
  }, [a]);

  // useEffect(() => {
  //   return () => {
  //     console.log("Hello");
  //   };
  // }, []);

  function handeleClick() {
    setA(a + 1);
  }
  return (
    <div>
      <button onClick={handeleClick}>{a}</button>
    </div>
  );
};

export default Counter;
