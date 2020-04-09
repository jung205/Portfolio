import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage.js'
import Navbar from './Components/Navbar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar></Navbar>
          <Homepage></Homepage>
        </header>
      </div>
    );
  }
}

export default App;
