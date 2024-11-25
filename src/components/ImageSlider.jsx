import { useEffect, useRef, useState } from "react";
import "../App.css";

const images = [
  "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
  "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
  "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
  "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
  "https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g",
];

export default function ImageSlider() {
  const [active, setActive] = useState(0);
  const timerId = useRef(null);

  const startInterval = () => {
    timerId.current = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  const stopInterval = () => {
    if (timerId.current) {
      clearInterval(timerId.current);
      timerId.current = null;
    }
  };

  useEffect(() => {
    startInterval();

    return stopInterval;
  }, []);

  const handleNextImage = () => {
    stopInterval();
    setActive((prev) => (prev + 1) % images.length);
    startInterval();
  };

  const handlePrevImage = () => {
    stopInterval();
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    startInterval();
  };

  return (
    <div className="slider-container" style={{ cursor: "pointer" }}>
      <div onClick={handlePrevImage}>◀️</div>
      <img className="image-container" src={images[active]} alt="wallepaper" />
      <div onClick={handleNextImage} style={{ cursor: "pointer" }}>
        ▶️
      </div>
    </div>
  );
}
