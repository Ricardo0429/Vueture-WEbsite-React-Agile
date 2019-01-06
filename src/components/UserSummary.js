import React, { Fragment } from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { RingLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const UserSummary = props => {
  console.log(props)
  let { user } = props;
  if (user) {
    return (
      <Fragment>
        <Card className="user-profile-card">
          <Image src={`${user.gravatar_url}`} className="user-profile-image" />
          <Card.Content>
            <Card.Header>{user.first_name + " " + user.last_name}</Card.Header>
            <Card.Meta>
              {user.title_list.length
                ? user.title_list.map(title => title + " ")
                : null}
            </Card.Meta>
            <Card.Description>
              <FontAwesomeIcon icon={faFire} size="lg" /> {}
              {user.karma_total}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              10 Friends
            </a>
          </Card.Content>
        </Card>
      </Fragment>
    );
  } else {
    return <RingLoader sizeUnit={"px"} size={200} color={"#34495E"} />;
  }
};

export default UserSummary;
