import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchEvents } from "../actions/getEventsAction";
import { Card, Container, Button } from "semantic-ui-react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../assets/eventsList.css";
export class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      time: []
    };
  }

  componentDidMount() {
    if (!this.props.events.length) {
      this.props.fetchEvents();
    }
  }

  componentDidUpdate() {
    window.localStorage.setItem("events", JSON.stringify(this.props.events));
  }
  ready;
  render() {
    let events = this.props.events.length
      ? this.props.events
      : JSON.parse(window.localStorage.getItem("events")) || [];

    const localizer = BigCalendar.momentLocalizer(moment);
    return (
      <Container>
        <div>
          <h1 className="events-header">
            AgileVentures Events
            <Button
              content="New Event"
              attached="right"
              className="new-event-button"
            />
          </h1>
          <p>
            We are hosting several events a day using Google Hangouts. Feel free
            to join in if you want to get involved or if you a curious about
            Pair Programming and Agile. Each event will have a link to an online
            Hangout prior to start time.
          </p>
        </div>
        <BigCalendar
          className="big-calendar"
          localizer={localizer}
          events={events}
        />

        {events.map((event, id) => {
          return (
            <Card fluid key={id} className="event-cards">
              <Card.Content>
                <Link to={`/${id}`} className="event-title">
                  <big>
                    <Card.Header>{event.title}</Card.Header>
                  </big>
                </Link>
                <Card.Meta>
                  {moment(event.start).format("MM-DD hh:mm")} -{" "}
                  {moment(event.end).format("MM-DD hh:mm")}
                </Card.Meta>
              </Card.Content>
              <Card.Description>
                {event.description.substring(0, 120)}
              </Card.Description>
            </Card>
          );
        })}
      </Container>
    );
  }
}
const mapStateToProps = store => ({ events: store.events });
export default connect(
  mapStateToProps,
  { fetchEvents }
)(EventsList);
