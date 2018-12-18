import React from "react";
import Project from "./Project";
import { HashLoader } from "react-spinners";

const PaginateProjects = ({ projects }) => {
  let projectsArray;
  if (projects.length) {
    projectsArray = projects.map(project => (
      <Project key={project.id} project={project} />
    ));
  }
  return (
    projectsArray || (
      <HashLoader
        sizeUnit={"px"}
        size={300}
        color={"#34495E"}
      />
    )
  );
};

export default PaginateProjects;
