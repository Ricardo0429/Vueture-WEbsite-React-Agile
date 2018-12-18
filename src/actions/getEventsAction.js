import axios from "axios";
import { GET_EVENTS } from "../types";

export let getEvents = events => ({ type: GET_EVENTS, payload: events });

export let fetchEvents = () => dispatch => {
  return axios.get("https://www.agileventures.org/api/v1/events/upcoming").then(response => {
    dispatch(getEvents(response.data));
  });
};
