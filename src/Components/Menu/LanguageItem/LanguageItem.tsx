import React from "react";
import './LanguageItem.css';
import { Language } from "../../../types";
import { useAppContext } from "../../../context/AppContext";

interface LanguageItemProps {
    lang: Language;
}

function LanguageItem(props: LanguageItemProps) {
    const { languages, setLanguages } = useAppContext();

    const remove = (lang: Language) => {
        setLanguages(languages.filter(l => l.code !== lang.code));
    };

    return <div className="LanguageItem">
        <p className="language-item">{props.lang.name}</p>
        <button className="language-remove-item" onClick={() => remove(props.lang)}>
            <img alt="" src="https://img.icons8.com/fluency-systems-filled/40/FFFFFF/x.png"></img>
        </button>
    </div>;
}

export default LanguageItem;