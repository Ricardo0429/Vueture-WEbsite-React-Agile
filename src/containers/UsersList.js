import React, { Component, Fragment } from "react";
import { Header } from "semantic-ui-react";
import Paginate from "../components/Paginate";
import PaginationLinks from "../components/PaginationLinks";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/getUsersAction";
export class UsersList extends Component {
  state = {
    firstPage: true,
    lastPage: true,
    pageCount: null
  };

  componentDidMount() {
    if (!this.props.users) {
      console.log(this.props)
      this.props.fetchUsers();
    }
  }
  
  componentWillReceiveProps() {
    this.setState({ pageCount: this.props.users.length / 12 });
  }

  handlePageSelect = selectedPage => e => {
    e.preventDefault();
    this.setState({
      selectedPage,
      firstPage: selectedPage - 1 < 1 ? true : false,
      lastPage: selectedPage + 1 > this.state.pageCount ? true : false
    });
  };

  render() {
    let { firstPage, lastPage, pageCount } = this.state;
    return (
      <Fragment>
        <Header>Volunteers Directory</Header>;
        <Paginate items={[]} />
        <PaginationLinks
          handlePageSelect={this.handlePageSelect}
          firstPage={firstPage}
          lastPage={lastPage}
          pageCount={pageCount}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({ users: store.users });
export default connect(
  mapStateToProps,
  { fetchUsers }
)(UsersList);
