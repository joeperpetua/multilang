import React, { useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import './TextInput.css';

interface TextInputProps {
    onTranslationResult: (translations: Record<string, string>) => void;
    onVariationsResult: (variations: Record<string, string[]>) => void;
    onClear: () => void;
}

function TextInput({ onTranslationResult, onVariationsResult, onClear }: TextInputProps) {
    const { languages } = useAppContext();
    const [inputText, setInputText] = useState("");
    const [isTranslating, setIsTranslating] = useState(false);
    const [isSearchingVariations, setIsSearchingVariations] = useState(false);

    const runTranslation = async () => {
        if (!inputText || languages.length === 0) return;
        
        setIsTranslating(true);
        setIsSearchingVariations(true);

        const tl = languages.map(l => l.code).join(',');

        // Run translate
        fetch(`https://apiml.joeper.myds.me/translate?q=${encodeURIComponent(inputText)}&tl=${tl}&sl=auto`)
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(transJson => {
                const newTranslations: Record<string, string> = {};
                transJson.translations.forEach((response: any) => {
                    newTranslations[response.target] = response.result;
                });
                onTranslationResult(newTranslations);
            })
            .catch(console.error)
            .finally(() => setIsTranslating(false));

        // Run dictionary
        fetch(`https://apiml.joeper.myds.me/dictionary?q=${encodeURIComponent(inputText)}&tl=${tl}&sl=auto`)
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(dictJson => {
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

    return <div className="TextInput">
        <h4>Enter text to translate:</h4>
        <textarea 
            name="input-text" 
            id="input-text" 
            cols={30} 
            rows={10} 
            autoFocus 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    runTranslation();
                }
            }}
        ></textarea>
        <div className="text-input-buttons">
            <button className="clear-button" id="clear-button" onClick={handleClear}>Clear</button>
            <button className="translate-button" id="translate-button" onClick={runTranslation}>Translate</button>
        </div>
        
        {isTranslating && (
            <span className="translation-loader" style={{ display: 'flex' }}>
                <p>Translating...</p>
                <span id="loader" className="loader medium"></span>
            </span>
        )}
        
        {isSearchingVariations && (
            <span className="variations-loader" style={{ display: 'flex' }}>
                <p>Looking for variations...</p>
                <span id="loader" className="loader medium"></span>
            </span>
        )}
    </div>;
}

export default TextInput;