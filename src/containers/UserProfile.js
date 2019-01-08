import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/getUsersAction";
import UserSummary from "../components/UserSummary";
import "../assets/UserProfile.css";

export class UserProfile extends Component {
  state = { user: null };

  componentDidMount() {
    if (!this.props.users.length) {
      this.props.fetchUsers();
    } else {
      const user = this.props.users.filter(
        user => user.id === Number(this.props.match.params.id)
      )[0];
      this.setState({ user });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.users.length !== nextProps.users.length) {
      const user = nextProps.users.filter(
        user => user.id === Number(this.props.match.params.id)
      )[0];
      this.setState({ user });
    }
  }

  render() {
    let { user } = this.state;
    return <UserSummary user={user} />;
  }
}

const mapStateToProps = store => ({ users: store.users });
export default connect(
  mapStateToProps,
  { fetchUsers }
)(UserProfile);
