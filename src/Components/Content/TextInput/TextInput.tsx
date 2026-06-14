import React, { useState } from "react";
import { useAppContext } from "../../../context/AppContext";

interface TextInputProps {
  onTranslationResult: (translations: Record<string, string>) => void;
  onVariationsResult: (variations: Record<string, string[]>) => void;
  onClear: () => void;
}

function TextInput({
  onTranslationResult,
  onVariationsResult,
  onClear,
}: TextInputProps) {
  const { languages } = useAppContext();
  const [inputText, setInputText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const [isSearchingVariations, setIsSearchingVariations] = useState(false);

  const runTranslation = async () => {
    if (!inputText || languages.length === 0) return;

    setIsTranslating(true);
    setIsSearchingVariations(true);

    const tl = languages.map((l) => l.code).join(",");

    // Run translate
    fetch(
      `https://apiml.joeper.myds.me/translate?q=${encodeURIComponent(inputText)}&tl=${tl}&sl=auto`,
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((transJson) => {
        const newTranslations: Record<string, string> = {};
        transJson.translations.forEach((response: any) => {
          newTranslations[response.target] = response.result;
        });
        onTranslationResult(newTranslations);
      })
      .catch(console.error)
      .finally(() => setIsTranslating(false));

    // Run dictionary
    fetch(
      `https://apiml.joeper.myds.me/dictionary?q=${encodeURIComponent(inputText)}&tl=${tl}&sl=auto`,
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((dictJson) => {
        const newVariations: Record<string, string[]> = {};
        dictJson.definitions.forEach((response: any) => {
          newVariations[response.target] = response.result;
        });
        onVariationsResult(newVariations);
      })
      .catch(console.error)
      .finally(() => setIsSearchingVariations(false));
  };

  const handleClear = () => {
    setInputText("");
    onClear();
  };

  return (
    <article className="border padding">
      <h6 className="small-margin">Enter text to translate:</h6>
      <div className="field border">
        <textarea
          name="input-text"
          id="input-text"
          autoFocus
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              runTranslation();
            }
          }}
          style={{ height: "40vh" }}
        ></textarea>
      </div>
      <nav className="group connected">
        <button className="error" id="clear-button" onClick={handleClear}>
          Clear
        </button>
        <button
          className="primary"
          id="translate-button"
          onClick={runTranslation}
        >
          Translate
        </button>
      </nav>

      {(isTranslating || isSearchingVariations) && (
        <div className="row middle-align top-margin">
          <progress className="circle small"></progress>
          <span>
            {isTranslating ? "Translating..." : "Looking for variations..."}
          </span>
        </div>
      )}
    </article>
  );
}

export default TextInput;
