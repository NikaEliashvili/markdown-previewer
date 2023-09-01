import { useState } from "react";
import { LuCopy } from "react-icons/lu";
import Markdown from "marked-react";
export default function Preview({ text }) {
  const [isCopiedAnim, setIsCopiedAnim] = useState(false);
  function copyText() {
    setIsCopiedAnim(true);
    const newText = <Markdown>{text}</Markdown>;
    console.log(newText.props.children);
    navigator.clipboard.writeText(newText.props.children);
    setTimeout(() => setIsCopiedAnim(false), 3000);
  }

  return (
    <div className="preview">
      <div className="header">
        <h4>Transformed text:</h4>
        {text && (
          <button className="copy-btn" onClick={copyText}>
            <LuCopy className="copy-icon" />
          </button>
        )}
      </div>
      <div className="preview-text">
        <Markdown>{text}</Markdown>
      </div>
      {isCopiedAnim && <div className="copied">Copied</div>}
    </div>
  );
}
