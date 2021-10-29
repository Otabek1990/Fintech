import './App.css';
import Navbar from './components/Navbar/navbar';
import Main from "./components/Main/main";
import About from "./components/About/about"
import {BrowserRouter as Router} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
   <Navbar/>
   <Main/>
   <About/>
   </Router>
    </div>
  );
}

export default App;
