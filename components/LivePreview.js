import React from "react";
import { SandpackPreview } from "@codesandbox/sandpack-react";

const LivePreview = () => {
  return (
    <div style={{ width: "40%", padding: "10px", borderLeft: "1px solid black" }}>
      <SandpackPreview />
    </div>
  );
};

export default LivePreview;
