import React, { Component } from 'react';
import { Modal, Grid, Col, Row, Well, Button } from 'react-bootstrap';

import logo from './logo.png';
import ladydev from './Lady-dev.png';
import realprojects from './real-projects.png';
import scrum from './Scrum.png';
import AVNavbar from './AVNavbar';
import './App.css';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: null
    };
    this.modals = [
      {
        buttonText: 'You are here!',
        xsOffset: 1,
        reactId: 'here',
        image: ladydev,
        modalText: 'Tired of toy projects, tutorials and online courses?'
      },
      {
        buttonText: 'Standups',
        xsOffset: 0,
        mdPull: 2,
        reactId: 'standups',
        image: scrum,
        modalText: 'Sitting down at home, or not, meet other people in our online hangouts.'
      },
      {
        buttonText: 'Real Projects',
        xsOffset: 3,
        reactId: 'projects',
        image: realprojects,
        modalText: 'Satisfy real charity customers with open source code for great causes around the world.'
      },
    ]
  }

  handleClose() {
    this.setState({show: null});
  }

  handleShow(id) {
    this.setState({show: id});
  }

  renderRows() {
    return this.modals.map(modal => {
      return (
        <Row>
        <Col xsOffset={modal.xsOffset} sm={5} mdPull={modal.mdPull}>
          <Button bsStyle="primary" bsSize="large" block onClick={() => this.handleShow(modal.reactId)}>
            <h1>{modal.buttonText}</h1>
          </Button>
          <Modal
            show={this.state.show == modal.reactId} onHide={this.handleClose}
          >
            <Modal.Header closeButton closeLabel="close window">
            </Modal.Header>
            <Modal.Body>
              <img src={modal.image} alt="lady dev" className="lady-dev" />
              <p className='landing-page-markers you-are-here'>{modal.modalText}</p>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
      )
    });
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

          {/* loop */}
          {this.renderRows()}

          <Row>
            <Col xsOffset={8} sm={5}>
              <Button bsStyle="primary" bsSize="large" block onClick={() => this.handleShow('sprints')}>
                <h1>Sprints</h1>
              </Button>
              <Modal
                show={this.state.show == 'sprints'} onHide={this.handleClose}
              >
                <Modal.Header closeButton closeLabel="close window">
                </Modal.Header>
                <Modal.Body>
                  <p className='landing-page-markers you-are-here'>Now you have got yourself introduced and interested in a project, why not commit to a sprint or two?
                      <img src={logo} className="App-logo" alt="logo" />
                  </p>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
          <Row>
            <Col xsOffset={6} sm={5}>
              <Button bsStyle="primary" bsSize="large" block onClick={() => this.handleShow('jobs')}>
                <h1>Jobs</h1>
              </Button>
              <Modal
                show={this.state.show == 'jobs'} onHide={this.handleClose}
              >
                <Modal.Header closeButton closeLabel="close window">
                </Modal.Header>
                <Modal.Body>
                  <img src={logo} className="App-logo" alt="logo" />
                  <p className='landing-page-markers you-are-here'> Premium members can get compensated for their time on paid projects, and many other alumni have gone on to great things in the wider world.
                  </p>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
        </Grid>
      </div >
    );
  }
}

export default App;
