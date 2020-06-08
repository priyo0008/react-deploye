import React from 'react';
import './App.css';
import Details from "./Details";
import Team from "./Team";
import Contact from "./Contact";
import Map from "./Map";
import Footer from "./Footer";
import Chart from "./Chart";
import Tips from "./Tips"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function BasicExample() {
  return (
    <div>
      <Router>
        <div class="header">
          <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <div className="headercus">
                <div class="navbar-header">
                  <Link class="navbar-brand" to="/">COVID-19 Dashboard</Link>
                </div>
                <ul class="nav navbar-nav">
                  <li class="active"><Link to="/">Home</Link></li>
                  <li><Link to="/Tips">Tips</Link></li>
                  <li><Link to="/Map">Covid-map</Link></li>
                  <li><Link to="/Team">Team</Link></li>
                </ul>
                <h1>COVID-19</h1>
                <div className="w3-myfont">
                  <p className="w3-xxxlarge">Information on Coronavirus disease (COVID-19) pandemic</p>
                </div>
              </div>

              <hr></hr>
              <Switch>
                <Route exact path="/">
                  <Details />
                </Route>
                <Route path="/Tips">
                  <Tips/>
                </Route>
                <Route path="/Map">
                  <Map />
                </Route>
                <Route path="/Team">
                  <Team />
                </Route>
              </Switch> 
              <Footer />
            </div>
          </nav>
        </div>
      </Router>
    </div>
    /* <Router>
       <div>
         <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/Map">Covid-map</Link>
           </li>
           <li>
             <Link to="/Team">Team</Link>
           </li>
         </ul>
 
         <hr />
 
         {
           A <Switch> looks through all its children <Route>
           elements and renders the first one whose path
           matches the current URL. Use a <Switch> any time
           you have multiple routes, but you want only one
           of them to render at a time
        }
         <Switch>
           <Route exact path="/">
             <Details />
           </Route>
           <Route path="/Map">
             <Map />
           </Route>
           <Route path="/Team">
             <Team />
           </Route>
         </Switch>
       </div>
     </Router> */
  );
}

  // You can think of these components as "pages"
  // in your app.

