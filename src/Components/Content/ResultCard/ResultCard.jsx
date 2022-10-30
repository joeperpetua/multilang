import React from "react";
import './ResultCard.css';

class ResultCard extends React.Component{

    render(){
        return <article className="ResultCard border round">
            <div className="row no-wrap">
                <div className="col min">
                    {/* <img src="/img/flags/united-kingdom.png" className="circle medium"></img> */}
                    <h6 className="trans-title">{this.props.lang.name}:</h6>
                </div>
                <div className="col">
                    <p className="translation-text border round" id={'translation-' + this.props.lang.code}>This is a sample text</p>
                </div>
            </div>
            <details id={'variations-' + this.props.lang.code} className="variations">
                <summary>Possible variations:</summary>
                <p id={'variations-list-' + this.props.lang.code}></p>
            </details>
        </article>;
    };

}

export default ResultCard;