import React, { Component } from 'react';
import { Grid, Col, Row, Well, Button } from 'react-bootstrap';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactHover from 'react-hover';


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

        <Grid>
          <ScrollAnimation animateIn="tada" offset={10} delay={1000} animateOnce={true}>
          <Row>
            <Col xsOffset={1} sm={5} className="section-well">
              <Button bsStyle="primary" bsSize="large">
                <p>You are here!
                    <img src={logo} className="App-logo" alt="logo" />
                </p>
              </Button>
            </Col>
          </Row>
          </ScrollAnimation>
          <ScrollAnimation animateIn="tada" offset={10} delay={3000} animateOnce={true}>
          <Row>
            <Col xsOffset={0} mdPull={2} sm={5} style={{ width: 400, margin: '100px 0' }}>
                <ReactHover className="landing-page-markers">
                  <ReactHover.Trigger type='trigger'>
                    <Button bsStyle="primary" bsSize="large">
                      <h1>Standups</h1>
                    </Button>
                  </ReactHover.Trigger>
                  <ReactHover.Hover type='hover'>
                    <Row>
                      <Col className="section-well"><p>Sitting down at home, or not, meet other people in our online hangouts.</p></Col>
                    </Row>
                </ReactHover.Hover>
                </ReactHover>
            </Col>
          </Row>
          </ScrollAnimation>
          <ScrollAnimation animateIn="tada" offset={10} delay={3000} animateOnce={true}>
          <Row>
            <Col xsOffset={3} sm={5} className="section-well">
              <p className='landing-page-markers you-are-here'>Real Projects{/*: Satisfy real charity customers with open source code for great causes around the world.*/}
                <img src={logo} className="App-logo" alt="logo" />
              </p>
            </Col>
          </Row>
          </ScrollAnimation>
          <ScrollAnimation animateIn="tada" offset={10} delay={1000} animateOnce={true}>
          <Row>
            <Col xsOffset={8} sm={5} className="section-well">
              <p className='landing-page-markers you-are-here'>Sprints{/*: Now you have got yourself introduced and interested in a project, why not commit to a sprint or two? */}
                <img src={logo} className="App-logo" alt="logo" />
              </p>
            </Col>
          </Row>
          </ScrollAnimation>
          <ScrollAnimation animateIn="tada" offset={10} delay={3000} animateOnce={true}>
          <Row>
            <Col xsOffset={6} sm={5}>
              <Well>
                <p className='landing-page-markers you-are-here'>Jobs{/*: Premium members can get compensated for their time on paid projects, and many other alumni have gone on to great things in the wider world.*/}
                  <img src={logo} className="App-logo" alt="logo" />
                </p>
              </Well>
            </Col>
          </Row>
          </ScrollAnimation>
        </Grid>



      </div>
    );
  }
}

export default App;
