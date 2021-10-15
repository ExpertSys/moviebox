import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery';
import LargeLogoHeader from './components/LargeLogoHeader';
import Nav from './components/Nav';
import Home from './components/Home';
import Upcoming from './components/Upcoming';
import Top from './components/Top';
import slideIndex from './components/Slide';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
            <Nav />
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/upcoming" component={Upcoming}/>
              <Route path="/top" component={Top}/>
              <Route path="/about" component={Home}/>
              <Route path="/shop" component={Home}/>
            </Switch>
        </Router>
    );
  }
}


export default App;
