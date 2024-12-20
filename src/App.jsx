import { useState } from "react";
import ProductList from "./components/productList";
import "./App.css";
// import Counter from "./components/Counter";
// import { CounterProvider } from "./context/CartContext";
// import Traffic from "./components/Traffic";
// import Search from "./components/TypeHead";
// import Counter from "./components";
// import ProgressBar from "./components/Progress";
// import Folder from "./components/FolderStruct";
// import explorer from "./data/folderData";
// import { useTraverseTree } from "./Hooks/useTraverseTree";
// import Pagination from "./components/Pagination";
// import ImageSlider from "./components/ImageSlider";
// import Accordian from "./components/Accordian";
// import Comment from "./components/Comment";
import { CartProvider } from "./context/CartsContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import CustomRangeSlider from "./components/Slider.jsx";
import Otp from "./components/Otp.jsx";

function App() {
  // const { insertNode } = useTraverseTree();

  // const handleInsertNode = (folderId, item, isFolder) => {
  //   insertNode(explorer, folderId, item, isFolder);
  // };

  return (
    <>
      <Router>
        {/* <Traffic /> */}

        {/* <Switch> */}
        {/* <CartProvider>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider> */}
        {/* </Switch> */}
        {/* <Search />
      <Counter /> */}
        {/* <ProgressBar /> */}
        {/* <Folder explorer={explorer} handleInsertNode={handleInsertNode} /> */}
        {/* <Pagination /> */}
        {/* <ImageSlider /> */}
        {/* <Accordian /> */}
        {/* <Comment /> */}
        {/* <CounterProvider>
        <Counter />
      </CounterProvider> */}
      </Router>
      {/* <CustomRangeSlider /> */}
      <Otp />
    </>
  );
}

export default App;
