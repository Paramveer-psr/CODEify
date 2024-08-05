import React, { useState, useEffect, useRef } from "react";
import "./css/TextBox.css";

const ConvertedCode = ({ convertedCode }) => {
  const [lines, setLines] = useState(1);
  const textareaRef = useRef(null);

  useEffect(() => {
    updateLines();
  }, [convertedCode]);

  const updateLines = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      const lineCount = textarea.value.split("\n").length;
      setLines(lineCount);
    }
  };

  const handleInput = () => {
    updateLines();
  };

  return (
    <>
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
            value={convertedCode}
            className="editor-textarea"
            placeholder="Converted Code will be displayed here."
            onChange={handleInput}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default ConvertedCode;
