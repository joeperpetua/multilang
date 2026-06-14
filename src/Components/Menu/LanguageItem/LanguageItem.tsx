import "./LanguageItem.css";
import { Language } from "../../../types";
import { useAppContext } from "../../../context/AppContext";
import { AiOutlineDelete, AiOutlinePlusSquare } from "react-icons/ai";

interface LanguageItemProps {
  lang: Language;
  onLanguageAdded?: () => void;
}

function LanguageItem({ lang, onLanguageAdded }: LanguageItemProps) {
  const { languages, setLanguages } = useAppContext();

  const isAdded = languages.some((l) => l.code === lang.code);

  const toggleLanguage = () => {
    if (isAdded) {
      setLanguages(languages.filter((l) => l.code !== lang.code));
    } else {
      setLanguages([...languages, lang]);
      if (onLanguageAdded) onLanguageAdded();
    }
  };

  return (
    <div className="LanguageItem surface-container">
      <p className="language-item no-margin">{lang.name}</p>
      <button
        className="language-toggle-btn surface-variant no-margin square small"
        onClick={toggleLanguage}
      >
        {isAdded ? (
          <AiOutlineDelete size={14} />
        ) : (
          <AiOutlinePlusSquare size={14} />
        )}
      </button>
    </div>
  );
}

export default LanguageItem;
