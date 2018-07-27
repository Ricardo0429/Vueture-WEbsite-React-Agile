import React, { Component } from 'react';
import { Modal, Grid, Col, Row, Button } from 'react-bootstrap';

import logo from './images/logo.png';
import ladydev from './images/Lady-dev.png';
import realprojects from './images/real-projects.png';
import runners from './images/runners.svg';
import jobs from './images/jobs.png';
import scrum from './images/Scrum.png';
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
      {
        buttonText: 'Sprints',
        xsOffset: 8,
        reactId: 'sprints',
        image: runners,
        modalText: 'Now you have got yourself introduced and interested in a project, why not commit to a sprint or two?'
      },
      {
        buttonText: 'Jobs',
        xsOffset: 6,
        reactId: 'jobs',
        image: jobs,
        modalText: 'Premium members can get compensated for their time on paid projects, and many other alumni have gone on to great things in the wider world.'
       }
    ]
  }

  handleClose() {
    this.setState({show: null});
  }

  handleShow(id) {
    this.setState({show: id});
  }

  renderModals() {
    return this.modals.map(modal => {
      return (
        <Row>
        <Col xsOffset={modal.xsOffset} sm={5} mdPull={modal.mdPull}>
          <Button bsStyle="primary" bsSize="large" block onClick={() => this.handleShow(modal.reactId)}>
            <h1>{modal.buttonText}</h1>
          </Button>
          <Modal
            show={this.state.show === modal.reactId} onHide={this.handleClose}
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
          {this.renderModals()}
        </Grid>
      </div >
    );
  }
}

export default App;
