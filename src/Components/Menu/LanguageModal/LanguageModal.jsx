import React from "react";
import {languages} from "../../../lib/languages.js";

import './LanguageModal.css';

function LanguageModal() {

    const cancel = () => {
        let modal = document.querySelector(".LanguageModal");
        modal.style.display = 'none';
    };

    const add = () => {
        let modal = document.querySelector(".LanguageModal");
        let select = document.querySelector("#languages");
        let lang = {"name": select.options[select.selectedIndex].text, "code": select.value};
        
        // checking if the lang was already added
        let present = false;
        let languagesArray = JSON.parse(localStorage.getItem('languagesArray'));
        if (languagesArray){
            languagesArray.forEach(element => {
                if (element.code === lang.code){
                    present = true;
                }
            });
        }
        if (languagesArray && !present){
            // already initialized array
            languagesArray.push(lang);
            localStorage.setItem('languagesArray', JSON.stringify(languagesArray));
            window.dispatchEvent(new Event("storage"));
        }else {
            // first initialization
            languagesArray = [lang];
            localStorage.setItem('languagesArray', JSON.stringify(languagesArray));
            window.dispatchEvent(new Event("storage"));
        }
        modal.style.display = 'none';
    };

    return <div className="LanguageModal">  
        <h4>Choose language:</h4>
        <select name="languages" id="languages">
            {languages.map((element, index) => {
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