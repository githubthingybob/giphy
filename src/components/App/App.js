import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
//import axios from 'axios';
import { connect } from "react-redux";

// Components
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites'

class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <header>
          <h1>Giphy Search</h1>
          <h3>Team Saga-Me</h3>
          <p><Link to="/">Search</Link></p>
          <p><Link to="/favorites">Favorites</Link></p>

        </header>
      </div>

      <Route path="/favorites">
        <Favorites/> 
      </Route>

      <Route exact path="/">
        <Search/> 
      </Route>


    </Router>
    );
  }
}

export default connect()(App);
