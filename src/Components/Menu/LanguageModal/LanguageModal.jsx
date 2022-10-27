import React from "react";

import './LanguageModal.css';

class LanguageModal extends React.Component{

    cancel = () => {
        let modal = document.querySelector(".LanguageModal");
        modal.style.display = 'none';
    };

    add = e => {
        let modal = document.querySelector(".LanguageModal");
        let select = document.querySelector("#languages");
        let lang = select.value;
        
        // checking if the lang was already added
        let present = false;
        let languagesArray = JSON.parse(localStorage.getItem('languagesArray'));
        if (languagesArray){
            languagesArray.forEach(element => {
                if (element === lang){
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
    }

    render(){
        return <div className="LanguageModal">  
            <h3>Choose language</h3>
            <select name="languages" id="languages">
                <option value="en">English</option>
                <option value="sp">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="nl">Dutch</option>
                <option value="jp">Japanese</option>
                <option value="pt">Portuguese</option>
            </select>
            <div className="modal-confirm">
                <button onClick={this.cancel}>Cancel</button>
                <button onClick={this.add}>Add</button>
            </div>
        </div>;
    };

}

export default LanguageModal;