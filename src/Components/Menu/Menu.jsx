import React from "react";
import LanguageItem from "./LanguageItem/LanguageItem";
import LanguageModal from "./LanguageModal/LanguageModal";

import './Menu.css';

class Menu extends React.Component{

    openModal(){
        let modal = document.querySelector(".LanguageModal");
        modal.style.display = 'flex';
    };

    resetLanguages(){
        localStorage.clear();
        window.dispatchEvent(new Event("storage"));
    }

    render(){
        return <div className="Menu">
            <div className="menu-lang-div">
                <h4 className="menu-lang-title">Target languages:</h4>
                {JSON.parse(localStorage.getItem('languagesArray'))?.map((element, index) => {
                    return <LanguageItem key={index} lang={element} />
                })}
                <div className="menu-buttons">
                    <button className="menu-add-btn" onClick={this.resetLanguages}>Clear all languages</button>
                    <button className="menu-add-btn" onClick={this.openModal}>Add new language</button>
                </div>
                <br></br>
                <LanguageModal />
            </div>
            <div className="menu-attributions">
                    <p>Attributions:</p>
                    <a rel="noreferrer" target="_blank" href="https://icons8.com/icon/K7OXfoF0zHXw/x">X icon by Icons8</a>
                    <a rel="noreferrer" target="_blank" href="https://icons8.com/icon/364/settings">Settings icon by Icons8</a>
                    <a rel="noreferrer" target="_blank" href="https://icons8.com/icon/62856/github">GitHub icon by Icons8</a>
            </div>
        </div>;
    };

}

export default Menu;