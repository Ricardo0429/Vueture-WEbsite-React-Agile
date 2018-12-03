import { GET_PROJECTS } from "../types";

const projectsReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return { ...state, projects: action.payload };
    default:
      return state;
  }
};

export default projectsReducer;
