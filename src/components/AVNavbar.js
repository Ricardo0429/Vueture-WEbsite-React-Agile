import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap'

class AVNavbar extends Component {
  render() {
    return (
       <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">AgileVentures</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Getting Started
              </NavItem>
              <LinkContainer to='about-us'>
                <NavItem eventKey={2} href="about-us">
                  About Us
                </NavItem>
              </LinkContainer>
              <NavDropdown eventKey={3} title="Events" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Upcoming Events</MenuItem>
                <MenuItem eventKey={3.2}>Live Events</MenuItem>
                <MenuItem eventKey={3.3}>Past Events</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Create an Event</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Sign In
              </NavItem>
              <NavItem eventKey={2} href="#">
                Sign Up
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
     );
  }
}

export default AVNavbar;       