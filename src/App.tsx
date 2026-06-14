import React from "react";
import Menu from './Components/Menu/Menu';
import Nav from './Components/Nav/Nav';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
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
