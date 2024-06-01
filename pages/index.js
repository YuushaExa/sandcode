import { Sandpack } from "@codesandbox/sandpack-react";

const code = `
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return <h1>Hello, Sandpack!</h1>;
}

ReactDOM.render(<App />, document.getElementById("root"));
`;

export default function Home() {
  return (
    <div>
      <h1>Sandpack Example</h1>
      <Sandpack
        template="react"
        customSetup={{
          files: {
            "/App.js": code,
          },
          entry: "/App.js",
        }}
      />
    </div>
  );
}
