import React from "react";
import './LanguageItem.css';

class LanguageItem extends React.Component{

    render(){
        return <div className="LanguageItem">
            {this.props.data ? this.props.data : "No language selected"}
        </div>;
    };

}

export default LanguageItem;