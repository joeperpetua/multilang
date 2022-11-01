import React from "react";
import TextInput from "./TextInput/TextInput";
import ResultCard from "./ResultCard/ResultCard";
import { handleTranslate, handleDictionary } from "../../lib/handleTranslation";
import { clearText } from "../../lib/clearText";
import { toggleMenu } from "../../lib/toggleMenu";
import './Content.css';

const NoLanguage = <div className="no-lang">
        <p>No languages selected</p>
        <button onClick={toggleMenu}>Add languages</button>
</div>;


class Content extends React.Component{

    constructor(props){
        super(props);
        this.runTranslation = this.runTranslation.bind(this);
        this.toggleLoader = this.toggleLoader.bind(this);
    }

    async runTranslation(){
        let textInput = document.querySelector("#input-text").value;
        this.toggleLoader(true, ".translation-loader");
        this.toggleLoader(true, ".variations-loader");
        await handleTranslate(textInput, JSON.parse( localStorage.getItem("languagesArray") ), this.toggleLoader);
        await handleDictionary(textInput, JSON.parse( localStorage.getItem("languagesArray") ), this.toggleLoader);
    }

    toggleLoader(loading, type){
        let loader = document.querySelector(type);
        if(loading){
            loader.style.display = "flex";
        }else if(!loading) {
            loader.style.display = "none";
        }
    }

    render(){
        return <div className="Content">
            <div className="input-div">
                <TextInput runTranslation={this.runTranslation} clearText={clearText} />
            </div>
            <div className="result-cards">
                {JSON.parse(localStorage.getItem('languagesArray')) === null ? NoLanguage : null}
                {JSON.parse(localStorage.getItem('languagesArray'))?.map((element, index) => {
                    return <ResultCard key={index} lang={element} />
                })}
            </div>
        </div>;
    };

}

export default Content;