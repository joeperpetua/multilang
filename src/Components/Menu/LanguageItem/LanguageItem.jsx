import React from "react";
import './LanguageItem.css';

function LanguageItem(props) {
    const remove = (lang) => {
        let languagesArray = JSON.parse(localStorage.getItem('languagesArray'));
        const index = languagesArray.findIndex(object => {
            return object.code === lang.code;
        });
        if (index > -1) {
            languagesArray.splice(index, 1);
        }
        localStorage.setItem('languagesArray', JSON.stringify(languagesArray));
        window.dispatchEvent(new Event("storage"));
    };

    return <div className="LanguageItem">
        <p className="language-item">{props.lang.name}</p>
        <button className="language-remove-item" onClick={() => remove(props.lang)}>
            <img alt="" src="https://img.icons8.com/fluency-systems-filled/40/FFFFFF/x.png"></img>
        </button>
    </div>;
}

export default LanguageItem;