import React, { useState, useEffect } from "react";
import "../App.css";

const ProgressBar = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setValue((prev) => prev + 1);
    }, 100);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1>Progress</h1>
        <Progress value={value} />
      </div>
    </div>
  );
};

const Progress = ({ value = 0 }) => {
  const [per, setPer] = useState(value);

  useEffect(() => {
    setPer(Math.min(100, Math.max(value, 0)));
  }, [value]);
  return (
    <div className="progress">
      <span className="progress-title">{per}%</span>
      <div style={{ width: `${per}%`}} className="progress-bar"></div>
      <div></div>
    </div>
  );
};

export default ProgressBar;
