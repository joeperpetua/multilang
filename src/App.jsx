import React from "react";
import Menu from './Components/Menu/Menu';
import Nav from './Components/Nav/Nav';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends React.Component{

  constructor(props){
      super(props);
      this.state = {
          languages: []
      };
  }

  componentDidMount(){
    console.log('mounted');
    window.addEventListener('storage', () => {
      console.log("Settings changed.");
      this.setState({
          languages: JSON.parse(window.localStorage.getItem('languagesArray'))
      });
    });

    let textInput = document.querySelector("#input-text");
    textInput.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        console.log("Detected enter key.");
        document.querySelector("#translate-button").click();
      }
    });

  }

  render() {
    return(
      <div className="App">
        <Nav />
        <Menu />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
