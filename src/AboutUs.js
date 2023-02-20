import React, { Component } from 'react'
import logo from './images/logo.png';
import AVNavbar from './components/AVNavbar';
import './App.css';

class AboutUs extends Component {
    render() {
        return (      
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to AgileVentures</h1>
        </header>
 
        <AVNavbar/>
        <AVNavbar/>
        <p className="App-intro">
          About Us
        </p>
        <p className="App-intro">
          Contact Us
        </p>    
      </div>)
    }
}

export default AboutUs
