import axios from "axios";
import { GET_PROJECTS } from "../types";

export let getProjects = projects => ({
  type: GET_PROJECTS,
  payload: projects
});

export let fetchProjects = () => dispatch => {
  return axios
    .get("https://develop.websiteone.agileventures.org/api/v1/projects")
    .then(response => {
      const { languages, followers, documents } = response.data;
      let projects = response.data.projects.map(project => {
        project.languages = languages[project.title].map(lang => lang.name);
        project.followers = followers[project.title]
        project.documents = documents[project.title]
        return project;
      });
      dispatch(getProjects(projects));
    });
};
