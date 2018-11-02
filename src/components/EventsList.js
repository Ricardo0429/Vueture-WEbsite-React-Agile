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
    //todo remove this when we start using redux
    this.mounted = true;

    axios.get("https://www.agileventures.org/events.json").then(response => {
      console.log(response.data);
      if (this.mounted) {
        this.setState({ events: response.data });
      }
    });
  }

  componentWillUnmount() {
    //todo: remove this when we start using redux
    this.mounted = false;
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
