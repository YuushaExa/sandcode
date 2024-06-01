import React from "react";

const FileExplorer = ({ files, setFiles, setActiveFile }) => {
  const handleAddFile = () => {
    const newFileName = prompt("Enter file name:");
    if (newFileName) {
      setFiles({ ...files, [`/${newFileName}`]: { code: "" } });
      setActiveFile(`/${newFileName}`);
    }
  };

  const handleFileClick = (fileName) => {
    setActiveFile(fileName);
  };

  return (
    <div style={{ width: "20%", borderRight: "1px solid black", padding: "10px" }}>
      <button onClick={handleAddFile}>Add File</button>
      <ul>
        {Object.keys(files).map((fileName) => (
          <li key={fileName} onClick={() => handleFileClick(fileName)}>
            {fileName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileExplorer;
