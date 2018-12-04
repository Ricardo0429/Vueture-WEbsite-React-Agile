import React, { Component } from "react";
import { Modal, Grid, Col, Row, Button } from "react-bootstrap";
import Navbar from "./components/Navbar";
import "./App.css";
import modals from "./modals";

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: null
    };

  }

  handleClose() {
    this.setState({ show: null });
  }

  handleShow(id) {
    this.setState({ show: id });
  }

  renderModals() {
    return modals.map(modal => {
      return (
        <Row key={modal.reactId}>
          <Col xsOffset={modal.xsOffset} sm={5} mdPull={modal.mdPull}>
            <Button
              bsStyle="primary"
              bsSize="large"
              block
              onClick={() => this.handleShow(modal.reactId)}
            >
              <h1>{modal.buttonText}</h1>
            </Button>
            <Modal
              show={this.state.show === modal.reactId}
              onHide={this.handleClose}
            >
              <Modal.Header closeButton closeLabel="close window" />
              <Modal.Body>
                <img
                  src={modal.image}
                  width={modal.imageWidth}
                  alt={modal.imageAltText}
                  className="modal-image"
                />
                <p className="landing-page-markers you-are-here">
                  {modal.modalText}
                </p>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <Grid>{this.renderModals()}</Grid>
      </React.Fragment>
    );
  }
}

export default App;
