// extract renderProjects method to component
// displays pagination?
// when user clicks on page number project[2*9]
// when user clicks on next or back, will have event listener to know which page
import React from "react";
import Project from "./Project";
import { PacmanLoader } from "react-spinners";
import "../assets/PaginateProjects.css";

const PaginateProjects = ({ projects }) => {
  let projectsArray;
  if (projects.length) {
    projectsArray = projects.map(project => (
      <Project key={project.id} project={project} />
    ));
  }
  return (
    projectsArray || (
      <PacmanLoader
        className="spinner"
        sizeUnit={"px"}
        size={100}
        color={"#34495E"}
      />
    )
  );
};

export default PaginateProjects;
