import React from "react";
import LanguageItem from "./LanguageItem/LanguageItem";
import LanguageModal from "./LanguageModal/LanguageModal";

import './Menu.css';

const Languages = () => {
    console.log('a');
    let languagesArray = JSON.parse(localStorage.getItem('languagesArray'));
    if (!languagesArray){
        return <LanguageItem data={null} />
    }
    languagesArray.forEach(element => {
        return <LanguageItem data={element} />
    });
};

class Menu extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            languages: []
        };
    }

    componentDidMount(){
        window.addEventListener('storage', () => {
            this.setState({
                languages: JSON.parse(window.localStorage.getItem('languagesArray'))
            });
            console.log(this.state.languages, JSON.parse(window.localStorage.getItem('languagesArray')));
        });
    }

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
                <h3 className="menu-lang-title">Target languages:</h3>
                
                <button className="menu-add-btn" onClick={this.openModal}>Add new language</button>
                <button className="menu-add-btn" onClick={this.resetLanguages}>Clear all languages</button>
                <LanguageModal />
            </div>
        </div>;
    };

}

export default Menu;