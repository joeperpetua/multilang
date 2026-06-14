import React, { useState } from "react";
import { languages as allLanguages } from "../../../lib/languages";
import { useAppContext } from "../../../context/AppContext";

import './LanguageModal.css';

interface LanguageModalProps {
    onClose: () => void;
}

function LanguageModal({ onClose }: LanguageModalProps) {
    const { languages, setLanguages } = useAppContext();
    const [selectedCode, setSelectedCode] = useState(allLanguages[0].code);

    const cancel = () => {
        onClose();
    };

    const add = () => {
        const lang = allLanguages.find(l => l.code === selectedCode);
        if (!lang) return;
        
        const present = languages.some(element => element.code === lang.code);
        
        if (!present) {
            setLanguages([...languages, lang]);
        }
        onClose();
    };

    return <div className="LanguageModal" style={{ display: 'flex' }}>  
        <h4>Choose language:</h4>
        <select name="languages" id="languages" value={selectedCode} onChange={(e) => setSelectedCode(e.target.value)}>
            {allLanguages.map((element, index) => {
                return <option key={index} value={element.code}>{element.name}</option>
            })}
        </select>
        <div className="modal-confirm">
            <button onClick={cancel}>Cancel</button>
            <button onClick={add}>Add</button>
        </div>
    </div>;
}

export default LanguageModal;