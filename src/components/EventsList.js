import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEvents } from "../actions/getEventsActions";
import { Card, Container } from "semantic-ui-react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

class EventsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: []
    };
  }

  componentDidMount() {
    this.props.fetchEvents();
  }
  render() {
    console.log(this.props.events);
    const localizer = BigCalendar.momentLocalizer(moment);
    return (
      <Container>
        <BigCalendar localizer={localizer} events={this.props.events} />

        <Card.Group>
          {this.props.events.map((event, id) => {
            return (
              <Card key={id}>
                <Card.Content>
                  <Card.Header>{event.title}</Card.Header>
                  <Card.Meta>
                    {moment(event.start).format("MM-DD hh:mm")} -{" "}
                    {moment(event.end).format("MM-DD hh:mm")}
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
const mapStateToProps = store => ({ events: store.events });
export default connect(
  mapStateToProps,
  { fetchEvents }
)(EventsList);
