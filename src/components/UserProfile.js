import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/getUsersAction";
import { Header, Card, Image, Icon } from "semantic-ui-react";
import { RingLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import "../assets/userProfile.css";

export class UserProfile extends Component {
  state = { user: [], isFetched: false };

  componentDidMount() {
    if (!this.props.users.length) {
      this.props.fetchUsers();
    } else {
      this.setState({ user: this.props.user });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.users.length !== nextProps.users.length) {
      const user = nextProps.users.filter(
        user => user.id == this.props.match.params.id
      )[0];
      this.setState({ user, isFetched: true });
    }
  }

  render() {
    let { user, isFetched } = this.state;
    console.log(user);
    if (isFetched) {
      return (
        <Fragment>
          <Card className="user-profile-card">
            <Image
              src={`${user.gravatar_url}`}
              className="user-profile-image"
            />
            <Card.Content>
              <Card.Header>
                {user.first_name + " " + user.last_name}
              </Card.Header>
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
          <Header as="h1" />
        </Fragment>
      );
    } else {
      return <RingLoader sizeUnit={"px"} size={200} color={"#34495E"} />;
    }
  }
}

const mapStateToProps = store => ({ users: store.users });
export default connect(
  mapStateToProps,
  { fetchUsers }
)(UserProfile);
