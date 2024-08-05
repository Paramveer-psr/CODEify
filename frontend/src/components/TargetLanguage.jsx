import { useContext, useState } from "react";
import { CodeConverterContext } from "../store/codeconvert-store";

const TargetLanguage = () => {
  const { targetLanguage, setTargetLanguage } =
    useContext(CodeConverterContext);
  const imgPath = "languages/" + targetLanguage + ".png";
  const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C-Sharp",
    "C++",
    "TypeScript",
    "PHP",
    "Swift",
    "Ruby",
    "Go",
    "Kotlin",
    "Rust",
    "R",
    "Objective-C",
    "Scala",
  ];
  return (
    <div className="TargetLanguage-list">
      <img src={imgPath} alt="Target Language:" height="80px" width="80px" />

      <div className="list-container">
        <select
          value={targetLanguage}
          className="lang-selector"
          onChange={(e) => setTargetLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default TargetLanguage;
