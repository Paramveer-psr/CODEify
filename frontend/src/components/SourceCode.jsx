import React, { useState, useEffect, useRef, useContext } from "react";
import "./css/TextBox.css";
import { CodeConverterContext } from "../store/codeconvert-store";

const SourceCode = () => {
  const [lines, setLines] = useState(1);
  const textareaRef = useRef(null);
  const { sourceCode, setSourceCode } = useContext(CodeConverterContext);

  const handleInput = () => {
    const textarea = textareaRef.current;
    const lineCount = textarea.value.split("\n").length;
    setLines(lineCount);
    setSourceCode(textareaRef.current.value);
    //console.log(textareaRef.current.value);
    //console.log(sourceCode);
  };

  return (
    <div className="editor-container">
      <div className="gutter">
        {[...Array(lines)].map((_, i) => (
          <div key={i} className="gutter-line">
            {i + 1}
          </div>
        ))}
      </div>
      <div className="editor">
        <textarea
          ref={textareaRef}
          //value={sourceCode}
          //onChange={(e) => setSourceCode(e.target.value)}
          className="editor-textarea"
          placeholder="Your input code here"
          onInput={handleInput}
        ></textarea>
      </div>
    </div>
  );
};

{
  /* <textarea
        value={sourceCode}
        onChange={(e) => setSourceCode(e.target.value)}
        placeholder="Enter source code"
    //   /> */
}
export default SourceCode;
