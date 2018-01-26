import React, { Component } from 'react';
import logo from './logo.png';
import AVNavbar from './AVNavbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to AgileVentures</h1>
        </header>
 
        <AVNavbar/>

        <p className="App-intro">
          Boost your team coding skills!
        </p>
      </div>
    );
  }
}

export default App;
