import React from "react";
import { SandpackCodeEditor, useSandpack } from "@codesandbox/sandpack-react";

const CodeEditor = ({ activeFile, setFiles }) => {
  const { sandpack } = useSandpack();

  const handleCodeChange = (code) => {
    setFiles((prevFiles) => ({
      ...prevFiles,
      [activeFile]: { code }
    }));
  };

  return (
    <div style={{ width: "40%", padding: "10px" }}>
      <SandpackCodeEditor
        showLineNumbers
        showTabs
        filePath={activeFile}
        onCodeUpdate={handleCodeChange}
      />
    </div>
  );
};

export default CodeEditor;
