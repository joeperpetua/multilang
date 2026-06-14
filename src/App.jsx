import React, { useState, useEffect } from "react";
import Menu from './Components/Menu/Menu';
import Nav from './Components/Nav/Nav';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import { clearText } from "./lib/clearText";
import './App.css';

function App() {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    console.log('mounted');
    
    const handleStorage = () => {
      setLanguages(JSON.parse(window.localStorage.getItem('languagesArray')));
      clearText();
    };
    
    window.addEventListener('storage', handleStorage);

    const handleKeydown = (e) => {
      if (e.code === "Enter") {
        document.querySelector("#translate-button").click();
      }
    };
    
    document.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener('storage', handleStorage);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div className="App">
      <Nav />
      <Menu />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
