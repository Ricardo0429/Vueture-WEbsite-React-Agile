import React, { Component } from "react";
import { Card, Container } from "semantic-ui-react";
import axios from "axios";

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
      <Container>
        <Card.Group>
          {this.state.events.map((event, id) => {
            return (
              <Card key={id}>
                <Card.Content>
                  <Card.Header>{event.title}</Card.Header>
                  <Card.Meta>
                    {event.start}
                    {event.end}
                  </Card.Meta>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      </Container>
    );
  }
}
