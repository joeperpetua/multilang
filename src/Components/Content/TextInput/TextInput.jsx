import React from "react";
import './TextInput.css';

class TextInput extends React.Component{

    constructor(props){
        super(props);
        this.runTranslation = this.runTranslation.bind(this);
        this.handleTranslate = this.handleTranslate.bind(this);
        this.toggleLoader = this.toggleLoader.bind(this);
    }

    async runTranslation(){
        let textInput = document.querySelector("#input-text").value;
        this.toggleLoader(true);
        await this.handleTranslate(textInput, JSON.parse(localStorage.getItem("languagesArray")));
        this.toggleLoader(false);
    }

    async handleTranslate(q, langArray) {
        let tl = '';
        let textFieldArray = [];
        langArray.forEach(element => {
            tl += `${element.code},`;
            textFieldArray.push({"lang": element.code, "element": document.querySelector(`#translation-${element.code}`)});
        });
        
        let trans_response = await fetch(`https://apiml.joeper.myds.me/translate?q=${q}&tl=${tl}`);
        if (trans_response.ok) {
            let trans_json = await trans_response.json();
            trans_json.translations.forEach(result => {
                textFieldArray.forEach(textFieldArrayElement => {
                    if(result.target === textFieldArrayElement.lang){
                        textFieldArrayElement.element.innerHTML = result.result;
                    }
                });
            });
            
        } else {
            console.error(trans_response);  
        }
        return;
    }

    toggleLoader(loading){
        let loader = document.querySelector("#loader");
        if(loading){
            loader.style.display = "inline-block";
        }else if(!loading) {
            loader.style.display = "none";
        }
    }

    render(){
        return <div className="TextInput">
            <h4>Enter text to translate:</h4>
            <textarea name="input-text" id="input-text" cols="30" rows="10"></textarea>
            <button className="translate-button" id="translate-button" onClick={() => this.runTranslation()}>Translate</button>
            <a id="loader" className="loader medium"></a>
        </div>;
    };

}

export default TextInput;