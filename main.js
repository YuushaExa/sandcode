import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import FileExplorer from "./components/FileExplorer";
import CodeEditor from "./components/CodeEditor";
import LivePreview from "./components/LivePreview";
import { SandpackProvider } from "@codesandbox/sandpack-react";

const App = () => {
  const [files, setFiles] = useState({
    "/App.js": { code: "export default function App() { return <h1>Hello, world!</h1> }" }
  });
  const [activeFile, setActiveFile] = useState("/App.js");

  return (
    <SandpackProvider files={files} activeFile={activeFile} template="react">
      <div style={{ display: "flex", height: "100vh" }}>
        <FileExplorer files={files} setFiles={setFiles} setActiveFile={setActiveFile} />
        <CodeEditor activeFile={activeFile} setFiles={setFiles} />
        <LivePreview />
      </div>
    </SandpackProvider>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
