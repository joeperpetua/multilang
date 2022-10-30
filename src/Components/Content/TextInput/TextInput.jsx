import React from "react";
import './TextInput.css';

class TextInput extends React.Component{

    handleTranslate(e) {
        console.log('asd接辞[せつじ] - Sufijosasd');
    }

    render(){
        return <div className="TextInput">
            <h4>Enter text to translate:</h4>
            <textarea name="input-text" id="input-text" cols="30" rows="10"></textarea>
            <button className="translate-button" id="translate-button" onClick={() => this.handleTranslate()}>Translate</button>
        </div>;
    };

}

export default TextInput;