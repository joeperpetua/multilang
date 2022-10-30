import React from "react";
import TextInput from "./TextInput/TextInput";
import ResultCard from "./ResultCard/ResultCard";
import './Content.css';

class Content extends React.Component{

    render(){
        return <div className="Content">
            <div className="input-div">
                <TextInput />
            </div>
            <div className="result-cards">
                {JSON.parse(localStorage.getItem('languagesArray'))?.map((element, index) => {
                    return <ResultCard key={index} lang={element} />
                })}
            </div>
        </div>;
    };

}

export default Content;