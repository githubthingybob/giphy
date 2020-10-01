import React, { Component } from 'react';
import Search from '../Search/Search';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <header>
          <h1>Giphy Search</h1>
          <h3>Team Saga-Me</h3>
        </header>
      </div>
      {/* <Route path="/search" component={Search} /> */}
      <Route path="/favorites" component={Favorites} />
    </Router>
    );
  }
}

export default App;
