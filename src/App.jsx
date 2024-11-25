import { useState } from "react";
import ProductList from "./components/productList";
import "./App.css";
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

function App() {
  // const { insertNode } = useTraverseTree();

  // const handleInsertNode = (folderId, item, isFolder) => {
  //   insertNode(explorer, folderId, item, isFolder);
  // };

  return (
    <>
      {/* <Traffic /> */}
      <ProductList />
      {/* <Search />
      <Counter /> */}
      {/* <ProgressBar /> */}
      {/* <Folder explorer={explorer} handleInsertNode={handleInsertNode} /> */}
      {/* <Pagination /> */}
      {/* <ImageSlider /> */}
      {/* <Accordian /> */}
      {/* <Comment /> */}
    </>
  );
}

export default App;
