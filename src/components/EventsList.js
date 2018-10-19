import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';

export default class EventsList extends Component {
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
      <ListGroup >
      {this.state.events.map(event => {
          return (
            <ListGroupItem>
              {event.title}
              {event.start}
              {event.end}
            </ListGroupItem>
          );
        })}
      </ListGroup>
  )}
}
