import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import "../assets/User.css";

const User = ({ item: user }) => {
  return (
    <Card className="user-card" raised={true}>
      <Card.Content>
        <Link to={`/users/${user.id}`} className="user-title">
          <Image src={`${user.gravatar_url}`} floated="left" avatar={true} />
          <big>
            <Card.Header className="user-card-header">
              {user.first_name
                ? user.first_name + " " + user.last_name
                : user.slug}
            </Card.Header>
          </big>
        </Link>
        <p>{user.title_list.length ? user.title_list.map(title => title) : null}</p>
        <p className="card-footer">
          <FontAwesomeIcon icon={faFire} size="lg" /> {}
          {user.karma_total}
        </p>
      </Card.Content>
    </Card>
  );
};

export default User;
