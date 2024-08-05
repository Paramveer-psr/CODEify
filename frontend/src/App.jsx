import React, { useContext, useState } from "react";
import axios from "axios";
import SourceCode from "./components/SourceCode";
import Header from "./components/Header";
import "./App.css";
import TargetLanguage from "./components/TargetLanguage";
import ConvertedCode from "./components/ConvertedCode";
import SourceLanguage from "./components/SourceLanguage";
import { CodeConverterContext } from "./store/codeconvert-store";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const {
    sourceCode,
    sourceLanguage,
    targetLanguage,
    convertedCode,
    setConvertedCode,
  } = useContext(CodeConverterContext);

  const [fetching, setFetching] = useState(false);

  const handleConvert = async () => {
    try {
      setFetching(true);
      const response = await axios.post("http://localhost:8000/convert", {
        sourceCode,
        sourceLanguage,
        targetLanguage,
      });
      setFetching(false);
      setConvertedCode(response.data.convertedCode);
    } catch (error) {
      console.error("Error converting code:", error);
    }
  };

  return (
    <center className="app">
      <Header />
      <div className="container">
        <div className="source-container">
          <center>
            <SourceLanguage className="source-lang" />
          </center>
          <SourceCode />
        </div>
        <div className="target-container">
          <center>
            <TargetLanguage />
          </center>
          <ConvertedCode convertedCode={convertedCode} />
        </div>
      </div>
      {fetching ? (
        <LoadingSpinner />
      ) : (
        <center>
          <button className="glow-on-hover" onClick={handleConvert}>
            Convert
          </button>
        </center>
      )}
    </center>
  );
}

export default App;
