import React, { Component } from "react";
import logo from "./images/logo.png";
import AVNavbar from "./components/AVNavbar";
import "./App.css";
import axios from "axios";

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      time: []
    };
  }

  componentDidMount() {
    axios.get("https://www.agileventures.org/events.json").then(response => {
      console.log(response.data);
      this.setState({ events: response.data });
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to AgileVentures</h1>
        </header>
        <AVNavbar />
        {this.state.events.map(item => {
          return (
            <div>
              <ul>
                <li>
                  {item.title}
                  <br />
                </li>
              </ul>
            </div>
          );
        })}
        <p className="App-intro">Events</p>
      </div>
    );
  }
}
