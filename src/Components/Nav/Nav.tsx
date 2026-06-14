import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import "./Nav.css";
import { AiOutlineClose, AiOutlineSetting } from "react-icons/ai";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function Nav() {
  const { menuOpen, setMenuOpen } = useAppContext();
  const [isDark, setIsDark] = useState(
    document.body.classList.contains("dark"),
  );

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [isDark]);

  return (
    <header style={{ zIndex: 1000, position: "relative" }}>
      <nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-icon transparent circle"
        >
          {menuOpen ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineSetting size={20} />
          )}
        </button>
        <h3
          className="max"
          id="nav-title"
          style={{ fontWeight: "normal", margin: "0 0 0 1em" }}
        >
          {menuOpen ? "Settings" : "MultiLang"}
        </h3>
        <button
          onClick={() => setIsDark(!isDark)}
          className="nav-icon transparent circle"
          title="Toggle theme"
        >
          {isDark ? (
            <MdOutlineLightMode size={20} />
          ) : (
            <MdOutlineDarkMode size={20} />
          )}
        </button>
      </nav>
    </header>
  );
}

export default Nav;
