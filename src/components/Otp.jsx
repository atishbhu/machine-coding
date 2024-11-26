import React, { useEffect, useRef, useState } from "react";
import "../App.css";

const Otp = ({ length = 4 }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      console.log("enter");
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (idx, e) => {
    let value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[idx] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && idx < length - 1 && inputRefs.current[idx + 1]) {
      inputRefs.current[idx + 1].focus();
    }
  };

  const handleClick = (idx, e) => {
    inputRefs.current[idx].setSelectionRange(1, 1);
  };

  const handleKeyDown = (idx, e) => {
    if (
      e.key === "Backspace" &&
      idx > 0 &&
      !otp[idx] &&
      inputRefs.current[idx - 1]
    ) {
      inputRefs.current[idx - 1].focus();
    }
  };

  return (
    <div className="flex justify-center">
      {otp.map((val, index) => (
        <input
          key={index}
          ref={(node) => (inputRefs.current[index] = node)}
          type="text"
          value={val}
          onChange={(e) => handleChange(index, e)}
          onClick={(e) => handleClick(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="otpInput"
        />
      ))}
    </div>
  );
};

export default Otp;
