import React, { Component } from "react";
import { Card, Container } from "semantic-ui-react";
import BigCalendar from "react-big-calendar";
import axios from "axios";
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'



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

    axios.get("events.json").then(response => {
      if (this.mounted) {
          let events=response.data.map(event => {
            return {
              ...event,
              start: new Date(event.start),
              end: new Date(event.end),
            }
          })
        this.setState({ events });
      }
    });
  }

  componentWillUnmount() {
    //todo: remove this when we start using redux
    this.mounted = false;
  }
  render() {
    console.log(this.state.events)
    const localizer = BigCalendar.momentLocalizer(moment)
    return (
      <Container>
        <BigCalendar
          localizer={localizer}
          events={this.state.events}
    />

  <Card.Group>
    {this.state.events.map((event, id) => {
      return (
        <Card key={id}>
          <Card.Content>
            <Card.Header>{event.title}</Card.Header>
            <Card.Meta>
              {moment(event.start).format('MM-DD hh:mm')} - {moment(event.end).format('MM-DD hh:mm')}
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
