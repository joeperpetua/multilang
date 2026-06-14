import React, { useState } from "react";
import TextInput from "./TextInput/TextInput";
import ResultCard from "./ResultCard/ResultCard";
import { useAppContext } from "../../context/AppContext";

import "./Content.css";

const NoLanguage = ({ openMenu }: { openMenu: () => void }) => (
  <div className="no-lang">
    <p>No languages selected</p>
    <button onClick={openMenu}>Add languages</button>
  </div>
);

function Content() {
  const { languages, setMenuOpen } = useAppContext();
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [variations, setVariations] = useState<Record<string, string[]>>({});

  const openMenu = () => {
    setMenuOpen(true);
  };

  const handleClear = () => {
    setTranslations({});
    setVariations({});
  };

  return (
    <div className="Content">
      <div className="input-div">
        <TextInput 
            onTranslationResult={setTranslations} 
            onVariationsResult={setVariations} 
            onClear={handleClear} 
        />
      </div>
      <div className="result-cards">
        {languages.length === 0 ? <NoLanguage openMenu={openMenu} /> : null}
        {languages.map((element, index) => {
          return (
            <ResultCard 
              key={index} 
              lang={element} 
              translation={translations[element.code]}
              variations={variations[element.code]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Content;
