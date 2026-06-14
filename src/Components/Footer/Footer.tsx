import React from "react";
import "./Footer.css";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer
      className="center-align padding top-margin"
      style={{ fontSize: "1.1rem" }}
    >
      <p>
        For a native mobile support download{" "}
        <a
          href="https://github.com/joeperpetua/multilang-app"
          rel="noreferrer"
          target="_blank"
          className="primary-text"
        >
          MultiLang Mobile App
        </a>
      </p>
      <a
        href="https://github.com/joeperpetua/multilang"
        rel="noreferrer"
        target="_blank"
      >
        <AiFillGithub size={32} />
      </a>
    </footer>
  );
}

export default Footer;
