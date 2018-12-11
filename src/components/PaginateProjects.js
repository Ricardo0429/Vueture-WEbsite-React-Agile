// extract renderProjects method to component
// receives props of how many projects to display
// displays pagination?
// when user clicks on page number project[2*9]
// when user clicks on next or back, will have event listener to know which page
import React from "react";
import Project from "./Project";

let PaginateProjects = ({ projects, selectedOption }) => {
  let projectsArray;
  if (selectedOption) {
    projectsArray = projects.map(project => (
      <Project key={project.id} project={project} />
    ));
  } else if (projects.length) {
    projectsArray = projects.map(project => (
      <Project key={project.id} project={project} />
    ));
  }
  return projectsArray || "loading...";
};

export default PaginateProjects;
