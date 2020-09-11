import React, { Component } from 'react'
import {
  Route,
  Switch,
  BrowserRouter as Router } from 'react-router-dom';
// import './App.css';
import Main from '../Main/Main';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" component={Main}/>
          </Switch>
        </Router>
      </div>
    )
  }
}