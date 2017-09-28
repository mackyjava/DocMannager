import React, { Component } from 'react';
import MySideNav from './components/nav';
import Home from './components/home';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MySideNav/>
        <Home/>
      </div>
    );
  }
}

export default App;
