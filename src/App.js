import React, { Component } from 'react'
import { Modal, Grid, Col, Row, Button } from 'react-bootstrap'

import logo from './images/logo.png'
import codingWithCat from './images/coding-with-cat.svg'
import realprojects from './images/real-projects.svg'
import runners from './images/runners.svg'
import jobs from './images/jobs.svg'
import scrum from './images/scrum.svg'
import AVNavbar from './components/AVNavbar'
import './App.css'

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
        image: codingWithCat,
        imageAltText: 'working on a computer at home with cat',
        imageWidth: '250px',
        modalText: 'Tired of toy projects, tutorials and online courses?'
      },
      {
        buttonText: 'Scrums',
        xsOffset: 0,
        mdPull: 2,
        reactId: 'scrums',
        image: scrum,
        imageAltText: 'team sitting round a table with kanban board in background',
        imageWidth: '350px',
        modalText: 'Meet others and plan your work in online hangouts.'
      },
      {
        buttonText: 'Real Projects',
        xsOffset: 3,
        reactId: 'projects',
        image: realprojects,
        imageAltText: 'shaking hands with business client across desk',
        imageWidth: '320px',
        modalText: 'Satisfy real charity clients around the world.'
      },
      {
        buttonText: 'Sprints',
        xsOffset: 7,
        reactId: 'sprints',
        image: runners,
        imageAltText: 'two people running',
        imageWidth: '320px',
        modalText: 'Commit to a week long sprint to accelerate your learning.'
      },
      {
        buttonText: 'Jobs',
        xsOffset: 5,
        reactId: 'jobs',
        image: jobs,
        imageAltText: 'person holding briefcase looking towards city',
        imageWidth: '300px',
        modalText: 'Get paid for in-house projects or go on to great things in the wider world.'
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
        <Row key={modal.reactId}>
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
              <img src={modal.image} width={modal.imageWidth} alt={modal.imageAltText} className="modal-image" />
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
