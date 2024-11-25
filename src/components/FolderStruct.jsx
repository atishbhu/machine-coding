import React, { useState } from "react";
import "../App.css";

const Folder = ({ explorer, handleInsertNode }) => {
  const [folderData, setFolderData] = useState(explorer);
  const [isExpand, setIsExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: null,
  });

  const onAddFolder = (e, isFolder) => {
    e.stopPropagation();
    setIsExpand(true);
    setShowInput({ isVisible: true, isFolder });
  };

  const handleFolder = (e) => {
    e.stopPropagation();
    console.log(e.keyCode);
    if (e.keyCode == 13 && e.target.value) {
      handleInsertNode(folderData.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, isVisible: false });
    }
  };

  return (
    <>
      {folderData?.isFolder ? (
        <div>
          <div>
            <div onClick={() => setIsExpand(!isExpand)}>
              <span className="folder-item">
                {folderData?.isFolder ? "🗂️" : "📂"}
              </span>
              <span className="folder-item">{folderData.name}</span>
              <span
                className="folder-item"
                onClick={(e) => onAddFolder(e, true)}
              >
                Folder +
              </span>
              <span
                className="folder-item"
                onClick={(e) => onAddFolder(e, false)}
              >
                File +
              </span>
            </div>
            <span
              style={{
                display: isExpand ? "block" : "none",
                paddingLeft: "25px",
              }}
            >
              {showInput?.isVisible && (
                <div>
                  <span>{showInput?.isFolder ? "🗂️" : "📂"}</span>
                  <input
                    type="text"
                    autoFocus
                    onKeyDown={handleFolder}
                    onBlur={() =>
                      setShowInput({ ...showInput, isVisible: false })
                    }
                  />
                </div>
              )}
              <div style={{ paddingLeft: "10px" }}>
                {folderData?.items.map((exp) => (
                  <Folder
                    key={exp.id}
                    explorer={exp}
                    handleInsertNode={handleInsertNode}
                  />
                ))}
              </div>
            </span>
          </div>
        </div>
      ) : (
        <div>
          <span style={{ paddingLeft: "10px" }}>📂{folderData?.name}</span>
        </div>
      )}
    </>
  );
};

export default Folder;
