import React, { Component, Fragment } from "react";
import { Card, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchProjects } from "../actions/getProjectsAction";
import { Link } from "react-router-dom";
import Select from "react-select";
import PaginateProjects from "../components/PaginateProjects";
import "../assets/ProjectsList.css";
export class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      projects: [],
      offset: 0,
      pageCount: 10,
      perPage: 12
    };
  }

  componentDidMount() {
    if (!this.props.projects.length) {
      this.props.fetchProjects();
    }
  }

  handleFilterByLang() {
    let lang = new Set();
    let { projects } = this.props;
    projects.map(project => {
      if (project.languages.length) {
        return project.languages.forEach(lang.add, lang);
      }
    });
    return [...lang].map(lang => ({ label: lang, value: lang }));
  }

  handleChange = selectedOption => {
    let filteredProjects = [];
    let { projects } = this.props;
    projects.map(project => {
      if (project.languages.length) {
        if (project.languages.includes(selectedOption.value)) {
          filteredProjects.push(project);
        }
      }
      this.setState({ selectedOption, projects: filteredProjects });
    });
  };

  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.state.perPage);
    console.log(offset);

    this.setState({ offset: offset }, () => {
      this.props.fetchProjects();
    });
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <Fragment>
        <Header className="projects-list-header">List of Projects</Header>
        <div>
          <p>
            To get involved in any of the projects, join one of the
            <Link to={`/events`}> srums </Link>and reach out to us, or send us
            an email at
            <a href="mailto:info@agileventures.org"> info@agileventures.org</a>.
          </p>
        </div>
        <div className="search-dropdown">
          <Select
            value={selectedOption}
            options={this.handleFilterByLang()}
            onChange={this.handleChange}
            placeholder="Search for project by programming language"
          />
        </div>
        <Card.Group centered itemsPerRow={3}>
          <PaginateProjects
            projects={this.props.projects}
            selectedOption={this.state.selectedOption}
            handlePrevious={"previous"}
            handleNext={"next"}
            breakLabel={"..."}
            pageCount={this.state.pageCount}
            pageRangeDisplayed={7}
            onPageChange={this.handlePageClick}
            activeClassName={"active"}
          />
        </Card.Group>
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({ projects: store.projects });
export default connect(
  mapStateToProps,
  { fetchProjects }
)(ProjectsList);
