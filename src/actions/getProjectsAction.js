import axios from "axios";
import { GET_PROJECTS } from "../types";

export let getProjects = projects => ({
  type: GET_PROJECTS,
  payload: projects
});

export let fetchProjects = () => dispatch => {
  return axios
    .get("https://develop.websiteone.agileventures.org/api/v1/projects")
    .then(response => dispatch(getProjects(response.data)));
};
