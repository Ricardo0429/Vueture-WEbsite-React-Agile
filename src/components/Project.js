import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import fullLogo from "../images/full_logo2_agile_ventures.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import "../assets/Project.css";

const Project = ({ item:project }) => {
  return (
    <Card className="project-card" raised={true}>
      <Image
        src={project.image_url ? project.image_url : fullLogo}
        className="project-image"
      />
      <Card.Content>
        <Link to={`/projects/${project.id}`} className="project-title">
          <big>
            <Card.Header>{project.title}</Card.Header>
          </big>
        </Link>
        <ul className="card-footer">
          <li>
            <FontAwesomeIcon icon={faUsers} size="lg" /> { }
            {project.followers}
          </li>
          <li>
            <FontAwesomeIcon icon={faFileAlt} size="lg" /> { }
            {project.documents}
          </li>
          <li>
            <FontAwesomeIcon icon={faGithubAlt} size="lg" /> { }
            {project.commit_count}
          </li>
        </ul>
      </Card.Content>
    </Card>
  );
}

export default Project;
