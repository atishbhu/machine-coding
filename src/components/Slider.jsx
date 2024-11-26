import React, { useState } from "react";
import "../App.css";

function CustomRangeSlider() {
  const [sliderValue, setSliderValue] = useState(50);
  const [minValue, setMinValue] = useState(10);
  const [maxValue, setMaxValue] = useState(100);

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setMaxValue(value);
  };

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= minValue && value <= maxValue) {
      setSliderValue(value);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setSliderValue(value);
  };

  return (
    <div className="slider-container">
      <h1>Custom Range Slider</h1>
      <div className="input-container">
        <label>
          Min Value:
          <input
            type="number"
            value={minValue}
            onChange={handleMinChange}
            min="0"
          />
        </label>
        <label>
          Max Value:
          <input
            type="number"
            value={maxValue}
            onChange={handleMaxChange}
            min="0"
          />
        </label>
      </div>

      <div className="slider-wrapper">
        <label>
          Slider Value:
          <input
            type="number"
            value={sliderValue}
            onChange={handleInputChange}
            min={minValue}
            max={maxValue}
          />
        </label>
        <input
          type="range"
          min={0}
          max={100}
          value={sliderValue}
          onChange={handleSliderChange}
          className="slider"
        />
      </div>
    </div>
  );
}

export default CustomRangeSlider;
