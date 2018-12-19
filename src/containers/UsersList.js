import React, { Component, Fragment } from "react";
import { Header } from "semantic-ui-react";
import Paginate from "../components/Paginate";
import PaginationLinks from "../components/PaginationLinks";

export class UsersList extends Component {
  state = { firstPage: true, lastPage: true };

  handlePageSelect = selectedPage => e => {
    e.preventDefault();
    this.setState({
      selectedPage,
      firstPage: selectedPage - 1 < 1 ? true : false,
      lastPage: selectedPage + 1 > this.state.pageCount ? true : false
    });
  };

  render() {
    let { firstPage, lastPage } = this.state;
    return (
      <Fragment>
        <Header>Volunteers Directory</Header>;
        <Paginate items={[]} />
        <PaginationLinks
          handlePageSelect={this.handlePageSelect}
          firstPage={firstPage}
          lastPage={lastPage}
        />
      </Fragment>
    );
  }
}
