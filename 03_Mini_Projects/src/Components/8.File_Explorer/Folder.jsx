import React, { useState } from "react";

function Folder({ handleInsertNode, explorer }) {
  console.log(explorer);
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, flag) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder: flag,
    });
  };
  const onAddFolder = (e) => {
    //! that means is enter
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div className="folder-wrapper">
        <div className="folder-header" onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>

          <div className="folder-actions">
            <button
              className="btn btn-newfolder"
              onClick={(e) => handleNewFolder(e, true)}
            >
              Folder +
            </button>
            <button
              className="btn btn-newfile"
              onClick={(e) => handleNewFolder(e, false)}
            >
              File +
            </button>
          </div>
        </div>

        <div
          className="folder-children"
          style={{ display: expand ? "block" : "none", paddingLeft: 25 }}
        >
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                onKeyDown={onAddFolder}
                className="inputContainer-input"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}
          {explorer.items && explorer.items.map((exp) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                explorer={exp}
                key={exp.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorer.name}</span>;
  }
}

export default Folder;
