import { GET_PROJECTS } from "../types";
import initialState from "./initialState";

const projectsReducer = (state = initialState.projects, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return [ ...action.payload ];
    default:
      return state;
  }
};

export default projectsReducer;
