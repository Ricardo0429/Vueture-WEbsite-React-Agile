import React, { Component } from 'react';
import { Grid, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';

import logo from './logo.png';
import AVNavbar from './AVNavbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">AgileVentures</h1>
          <h2>Boost your team coding skills!</h2>
        </header>
 
        <AVNavbar/>

        <ListGroup>
          <Row>
            <Col xsOffset={1} sm={4} class="section-well">
            
              <p class='landing-page-markers you-are-here'>You are here!</p>
              {/* <ListGroupItem header="You are here" href="#" bsClass="list-group-item landing-page-markers">
                  Tired of toy projects, tutorials, and online courses?
              </ListGroupItem> */}
            </Col>
          </Row>
          <Row>
            <Col xsOffset={7} sm={4} class="section-well">
              <ListGroupItem header="Standups" href="#" bsClass="list-group-item landing-page-markers">
                Sitting down at home, or not, meet other people in our online hangouts.
              </ListGroupItem>
            </Col>
          </Row>
          <Row>
            <Col xsOffset={1} sm={4} class="section-well">
              <ListGroupItem header="Real Projects" href="#" bsClass="list-group-item landing-page-markers">
                Satisfy real charity customers with open source code for great causes around the world.
              </ListGroupItem>
            </Col>
          </Row>  
          <Row>
            <Col xsOffset={7} sm={4} class="section-well">
              <ListGroupItem header="Sprints" href="#" bsClass="list-group-item landing-page-markers">
                Now you've got yourself introduced and interested in a project, why not commit to a sprint or two?
              </ListGroupItem>
            </Col>
          </Row>
          <Row>
            <Col xsOffset={1} sm={4} class="section-well">
              <ListGroupItem header="Jobs" href="#" bsClass="list-group-item landing-page-markers">
                Premium members can get compensated for their time on paid projects, and many other alumni have gone on to great things in the wider world.
              </ListGroupItem>  
            </Col>
          </Row>   
          <Row>
            <Col xsOffset={1} sm={4} class="section-well">
              <ListGroupItem header="Jobs" href="#" bsClass="list-group-item landing-page-markers">
                Premium members can get compensated for their time on paid projects, and many other alumni have gone on to great things in the wider world.
              </ListGroupItem>
            </Col>
          </Row>    
        </ListGroup>
      </div>
    );
  }
}

export default App;
