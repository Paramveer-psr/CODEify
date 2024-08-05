import { useContext, useState } from "react";
import { CodeConverterContext } from "../store/codeconvert-store";

const SourceLanguage = () => {
  const { sourceLanguage, setSourceLanguage } =
    useContext(CodeConverterContext);
  // console.log(sourceLanguage);
  const imgPath = "languages/" + sourceLanguage + ".png";
  //console.log(imgPath);

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
    <div className="SourceLanguage-list">
      <img src={imgPath} alt="Source Language:" height="80px" width="80px" />

      <select
        value={sourceLanguage}
        onChange={(e) => setSourceLanguage(e.target.value)}
        placeholder="Select"
        className="lang-selector"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SourceLanguage;
