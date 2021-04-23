import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import About from './components/About.js'
import Home from './components/Home.js'
import Projects from './components/Projects.js'
import PageNotFound from './components/PageNotFound.js'
import { AiFillHome } from 'react-icons/ai';
import { BsInfo } from 'react-icons/bs';
import { FaCubes } from 'react-icons/fa';



function App() {
  return (
    <>
    <Router>
    <div id="navbar">
      <Link className="link" to="/"><AiFillHome className="icon"/> Homepage</Link>
      <Link className="link" to="/about"><BsInfo className="icon"/>About</Link>
      <Link className="link" to="/projects"><FaCubes className="icon"/> Projects</Link>
    </div>
      
        <Switch>
          <Route path="/about" exact component={About}/>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="*" exact component={PageNotFound}/>
        </Switch>
      </Router>
    </>
  )
}

export default App;
