import axios from "axios";
import { GET_EVENTS } from "../types";

export let getEvents = events => ({ type: GET_EVENTS, payload: events });

export let fetchEvents = () => dispatch => {
  return axios.get("https://develop.websiteone.agileventures.org/events.json").then(response => {
    console.log(response);
    dispatch(getEvents(response.data));
  });
};
