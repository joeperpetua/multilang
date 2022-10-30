import React from "react";
import './LanguageItem.css';

class LanguageItem extends React.Component{
    remove(lang){
        let languagesArray = JSON.parse(localStorage.getItem('languagesArray'));
        const index = languagesArray.findIndex(object => {
            return object.code === lang.code;
        });
        if (index > -1) {
            languagesArray.splice(index, 1);
        }
        localStorage.setItem('languagesArray', JSON.stringify(languagesArray));
        window.dispatchEvent(new Event("storage"));
    }

    render(){
        return <div className="LanguageItem">
            <p className="language-item">{this.props.lang.name}</p>
            <button className="language-remove-item" onClick={() => this.remove(this.props.lang)}>
                <img src="https://img.icons8.com/fluency-systems-filled/40/FFFFFF/x.png"></img>
            </button>
        </div>;
    };

}

export default LanguageItem;