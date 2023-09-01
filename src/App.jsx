import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

import Markdown from "marked-react";
import editorLogo from "/editor-logo.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <div className="logo">
        <img src={editorLogo} className="logo-icon" />
      </div>
      <div className="app">
        <div className="hero">
          <Editor handleChange={handleChange} />
          <Preview text={text} />
        </div>
      </div>
    </>
  );
}

export default App;
