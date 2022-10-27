import React from "react";
import {toggleMenu} from '../../lib/toggleMenu';
import './Nav.css';

class Nav extends React.Component{
    render(){
        return <div className="Nav">
            <div className="nav-icon-div">
                <img className="nav-icon" alt="Menu Icon" src="https://img.icons8.com/48/FFFFFF/settings--v1.png" onClick={toggleMenu} />
            </div>
            <div className="nav-title-div">
                <h3 id="nav-title">MultiLang</h3>
            </div>
        </div>;
    };

}

export default Nav;