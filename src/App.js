import React, { Component } from 'react';
import { Modal, Grid, Col, Row, Well, Button } from 'react-bootstrap';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactHover from 'react-hover';


import logo from './logo.png';
import AVNavbar from './AVNavbar';
import './App.css';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">AgileVentures</h1>
          <h2>Boost your team coding skills!</h2>
        </header>

        <AVNavbar />

        <Grid>
          <Row>
            <Col xsOffset={1} sm={5}>
              <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                <h1>You are here!</h1>
              </Button>
              <Modal
                show={this.state.show} onHide={this.handleClose}
              >
                <Modal.Header closeButton closeLabel="close window">
                </Modal.Header>
                <Modal.Body>
                  <p className='landing-page-markers you-are-here'>Tired of toy projects, tutorials and online courses?
                      <img src={logo} className="App-logo" alt="logo" />
                  </p>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
          <Row>
            <Col xsOffset={0} mdPull={2} sm={5}>
              <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                <h1>Standups</h1>
              </Button>
              <Modal
                show={this.state.show} onHide={this.handleClose}
              >
                <Modal.Header closeButton closeLabel="close window">
                </Modal.Header>
                <Modal.Body>
                  <p className='landing-page-markers you-are-here'>Sitting down at home, or not, meet other people in our online hangouts.
                      <img src={logo} className="App-logo" alt="logo" />
                  </p>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
          <Row>
            <Col xsOffset={3} sm={5}>
              <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                <h1>Real Projects</h1>
              </Button>
              <Modal
                show={this.state.show} onHide={this.handleClose}
              >
                <Modal.Header closeButton closeLabel="close window">
                </Modal.Header>
                <Modal.Body>
                  <p className='landing-page-markers you-are-here'>Satisfy real charity customers with open source code for great causes around the world.
                      <img src={logo} className="App-logo" alt="logo" />
                  </p>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
          <Row>
            <Col xsOffset={8} sm={5}>
              <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                <h1>Sprints</h1>
              </Button>
              {/*: Now you have got yourself introduced and interested in a project, why not commit to a sprint or two? */}
            </Col>
          </Row>
          <Row>
            <Col xsOffset={6} sm={5}>
              <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                <h1>Jobs</h1>
              </Button>
              {/*: Premium members can get compensated for their time on paid projects, and many other alumni have gone on to great things in the wider world.*/}
            </Col>
          </Row>
        </Grid>
      </div >
    );
  }
}

export default App;
