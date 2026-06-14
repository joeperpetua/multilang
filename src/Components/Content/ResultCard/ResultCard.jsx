import React from "react";
import './ResultCard.css';

function ResultCard(props) {
    return <article className="ResultCard border round">
        <div className="row no-wrap">
            <div className="col min">
                <h6 className="trans-title">{props.lang.name}:</h6>
            </div>
            <div className="col">
                <p className="translation-text border round" id={'translation-' + props.lang.code}></p>
            </div>
        </div>
        <details id={'variations-' + props.lang.code} className="variations">
            <summary>Possible variations:</summary>
            <p className="variation-text" id={'variations-list-' + props.lang.code}></p>
        </details>
    </article>;
}

export default ResultCard;