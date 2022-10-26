import './App.css';
import SideBar from './Components/SideBar/SideBar';
import Nav from './Components/Nav/Nav';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
