import { useEffect, useState } from "react";
import "../App.css";

const Traffic = () => {
  const color = ["red", "yellow", "green"];
  const [currIdx, setCurrIdx] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      const crr = (currIdx + 1) % 3;
      setCurrIdx(crr);
    }, 1000);

    return () => clearInterval(timerId);
  }, [currIdx]);
  return (
    <div className="traffic-container">
      {color.map((el, idx) => (
        <div
          className={currIdx === idx ? `${el} box active` : `${el} box`}
          key={idx}
        ></div>
      ))}
    </div>
  );
};

export default Traffic;
