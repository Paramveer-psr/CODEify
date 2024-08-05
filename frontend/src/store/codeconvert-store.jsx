import { createContext, useState } from "react";

export const CodeConverterContext = createContext();

export const CodeConverterProvider = ({ children }) => {
  const [sourceCode, setSourceCode] = useState("");
  const [convertedCode, setConvertedCode] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("C++");
  const [targetLanguage, setTargetLanguage] = useState("Python");

  return (
    <CodeConverterContext.Provider
      value={{
        sourceCode,
        setSourceCode,
        convertedCode,
        setConvertedCode,
        sourceLanguage,
        setSourceLanguage,
        targetLanguage,
        setTargetLanguage,
      }}
    >
      {children}
    </CodeConverterContext.Provider>
  );
};

// import { createContext, useState } from "react";

// export const codeConverter = createContext();
// //   sourceCode,
// //   setSourceCode,
// //   convertedCode,
// //   setConvertedCode,
// //   sourceLanguage,
// //   setSourceLanguage,
// //   targetLanguage,
// //   setTargetLanguage

// export const CodeConverterProvider = ({ children }) => {
//   const [sourceCode, setSourceCode] = useState(" ");
//   const [convertedCode, setConvertedCode] = useState(" ");
//   const [sourceLanguage, setSourceLanguage] = useState("C++");
//   const [targetLanguage, setTargetLanguage] = useState("python  ");

//   return (
//     <codeConverter.Provider
//       value={{
//         sourceCode,
//         setSourceCode,
//         convertedCode,
//         setConvertedCode,
//         sourceLanguage,
//         setSourceLanguage,
//         targetLanguage,
//         setTargetLanguage,
//       }}
//     >
//       {children}
//     </codeConverter.Provider>
//   );
// };
