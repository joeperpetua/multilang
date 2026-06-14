import React from "react";
import './ResultCard.css';
import { Language } from "../../../types";

interface ResultCardProps {
    lang: Language;
    translation?: string;
    variations?: string[];
}

function ResultCard({ lang, translation = '', variations = [] }: ResultCardProps) {
    return <article className="ResultCard border round">
        <div className="row no-wrap">
            <div className="col min">
                <h6 className="trans-title">{lang.name}:</h6>
            </div>
            <div className="col">
                <p className="translation-text border round" id={'translation-' + lang.code}>
                    {translation}
                </p>
            </div>
        </div>
        <details 
            id={'variations-' + lang.code} 
            className="variations"
            style={{ display: variations.length > 0 ? 'block' : 'none' }}
        >
            <summary>Possible variations:</summary>
            <p className="variation-text" id={'variations-list-' + lang.code}>
                {variations.map(v => `${v}; `)}
            </p>
        </details>
    </article>;
}

export default ResultCard;