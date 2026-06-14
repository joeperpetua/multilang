import React, { useState } from "react";
import LanguageItem from "./LanguageItem/LanguageItem";
import LanguageModal from "./LanguageModal/LanguageModal";
import { useAppContext } from '../../context/AppContext';

import './Menu.css';

function Menu() {
    const { languages, setLanguages, menuOpen } = useAppContext();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const resetLanguages = () => {
        setLanguages([]);
    };

    return <div className={`Menu ${menuOpen ? 'opened' : 'closed'}`}>
        <div className="menu-lang-div">
            <h4 className="menu-lang-title">Target languages:</h4>
            {languages?.map((element, index) => {
                return <LanguageItem key={index} lang={element} />
            })}
            <div className="menu-buttons">
                <button className="menu-add-btn" onClick={resetLanguages}>Clear all languages</button>
                <button className="menu-add-btn" onClick={() => setIsModalOpen(true)}>Add new language</button>
            </div>
            <br></br>
            {isModalOpen && <LanguageModal onClose={() => setIsModalOpen(false)} />}
        </div>
        <div className="menu-attributions">
                <p>Attributions:</p>
                <a rel="noreferrer" target="_blank" href="https://icons8.com/icon/K7OXfoF0zHXw/x">X icon by Icons8</a>
                <a rel="noreferrer" target="_blank" href="https://icons8.com/icon/364/settings">Settings icon by Icons8</a>
                <a rel="noreferrer" target="_blank" href="https://icons8.com/icon/62856/github">GitHub icon by Icons8</a>
        </div>
    </div>;
}

export default Menu;