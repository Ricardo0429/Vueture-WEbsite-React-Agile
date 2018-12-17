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
