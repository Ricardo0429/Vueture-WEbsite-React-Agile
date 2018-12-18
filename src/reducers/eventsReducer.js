import { GET_EVENTS } from "../types";
import initialState from "./initialState";

const eventsReducer = (state = initialState.events, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return [ ...action.payload ];
    default:
      return state;
  }
};

export default eventsReducer;