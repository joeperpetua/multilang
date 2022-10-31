import React from "react";
import './TextInput.css';

class TextInput extends React.Component{

    render(){
        return <div className="TextInput">
            <h4>Enter text to translate:</h4>
            <textarea name="input-text" id="input-text" cols="30" rows="10" autoFocus></textarea>
            <div className="text-input-buttons">
                <button className="clear-button" id="clear-button" onClick={() => this.props.clearText()}>Clear</button>
                <button className="translate-button" id="translate-button" onClick={() => this.props.runTranslation()}>Translate</button>
            </div>
            <span className="translation-loader">
                <p>Translating...</p>
                <span id="loader" className="loader medium"></span>
            </span>
            <span className="variations-loader">
                <p>Looking for variations...</p>
                <span id="loader" className="loader medium"></span>
            </span>
            
        </div>;
    };

}

export default TextInput;