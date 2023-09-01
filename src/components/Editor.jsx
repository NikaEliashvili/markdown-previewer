import { useState } from "react";

export default function Editor({ handleChange }) {
  return (
    <div className="editor-div">
      <h4>Your Text: </h4>
      <textarea
        name="text"
        id="editor"
        className="editor"
        onChange={(e) => handleChange(e)}
        spellCheck="false"
        placeholder="Type text here to transform..."
      ></textarea>
    </div>
  );
}
