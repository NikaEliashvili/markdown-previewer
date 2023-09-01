import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

import Markdown from "marked-react";

import "./App.css";

function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <div className="app">
        <Editor handleChange={handleChange} />
        <Preview text={text} />
      </div>
    </>
  );
}

export default App;
