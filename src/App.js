import { useEffect, useState } from "react";
const App = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
        includedLanguages: "gu",
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const [input, setInput] = useState("");

  return (
    <>
      <div id="google_translate_element"></div>

      <div>
        <textarea
          className="input-text"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
        ></textarea>
      </div>
      <p>{input}</p>
    </>
  );
};

export default App;
