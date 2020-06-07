import React from 'react';
import './App.css';
import Details from "./Details";
import Covidmap from "./Covidmap";
import Contact from "./Contact";
import Main from "./Main";
import Map from "./Map";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Summary from './Summary';

class App extends React.Component {
  render() {
    return ( 
<Main/> 
      /*  <div>
      <Router>
          <Link to="">Home</Link>
          <Link to="/Covidmap">About</Link>
          <Link to="/Contact">Contact</Link>
          <Route exact path="/" component={Details} />
          <Route path="/Covidmap" component={Covidmap} />
          <Route path="/Contact" component={Contact} />
        </Router>

      </div>*/
    )
  }
}

export default App;
