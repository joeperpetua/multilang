import React from "react";
import { useAppContext } from '../../context/AppContext';
import './Nav.css';

function Nav() {
    const { menuOpen, setMenuOpen } = useAppContext();

    return <div className="Nav" style={menuOpen ? { justifyContent: 'flex-end' } : {}}>
        <div className="nav-icon-div">
            <img 
                className="nav-icon" 
                alt="Menu Icon" 
                src={menuOpen ? "https://img.icons8.com/fluency-systems-filled/48/FFFFFF/x.png" : "https://img.icons8.com/48/FFFFFF/settings--v1.png"} 
                onClick={() => setMenuOpen(!menuOpen)} 
            />
        </div>
        <div className="nav-title-div">
            <h3 id="nav-title">{menuOpen ? "Settings" : "MultiLang"}</h3>
        </div>
    </div>;
}

export default Nav;