import React from "react";
import './Footer.css';

class Footer extends React.Component{

    render(){
        return <div className="Footer">
            <p>For a native mobile support download <a href="https://github.com/joeperpetua/multilang-app" rel="noreferrer" target="_blank">MultiLang Mobile App</a></p>
            <a href="https://github.com/joeperpetua/multilang" rel="noreferrer" target="_blank"><img alt="Github Link" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png"/></a>
        </div>;
    };

}

export default Footer;