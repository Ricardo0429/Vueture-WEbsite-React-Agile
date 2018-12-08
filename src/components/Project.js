import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import fullLogo from "../images/full_logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers  } from "@fortawesome/free-solid-svg-icons";

function Project(props) {
  const listElements = [
    <FontAwesomeIcon icon={faUsers} />

  ];
  const listItems = listElements.map(item => <li>{item}</li>)
  return (
    <Card className="project-card">
      <Image
        src={props.project.image_url ? props.project.image_url : fullLogo}
        size="large"
      />
      <Card.Content>
        <Link to={`/projects/${props.project.id}`} className="project-title">
          <big>
            <Card.Header>{props.project.title}</Card.Header>
          </big>
        </Link>
        <ul>{listItems}</ul>
      </Card.Content>
    </Card>
  );
}

export default Project;
