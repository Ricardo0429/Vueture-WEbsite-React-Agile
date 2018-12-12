import React, { Component, Fragment } from "react";
import { Card, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchProjects } from "../actions/getProjectsAction";
import { Link } from "react-router-dom";
import Select from "react-select";
import PaginateProjects from "../components/PaginateProjects";
import PaginationLinks from "../components/PaginationLinks";
import "../assets/ProjectsList.css";
export class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      projects: [],
      filteredProjects: null,
      pageCount: null,
      perPage: 12,
      totalProejcts: null,
      selectedPage: 1
    };
  }

  componentDidMount() {
    if (!this.props.projects.length) {
      this.props.fetchProjects().then(() => {
        this.setState({
          projects: this.props.projects.slice(0, this.state.perPage),
          totalProjects: this.props.projects.length,
          pageCount: Math.ceil(this.props.projects.length / 12)
        });
      });
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
    let { selectedPage, perPage } = this.state;
    let startingProject = (selectedPage - 1) * perPage;

    if (selectedOption) {
      projects.map(project => {
        if (project.languages.length) {
          if (project.languages.includes(selectedOption.value)) {
            filteredProjects.push(project);
          }
        }
        this.setState({
          selectedOption,
          filteredProjects: filteredProjects.slice(
            startingProject,
            startingProject + perPage
          ),
          pageCount: Math.ceil(filteredProjects.length / 12)
        });
      });
    } else {
      this.setState({ selectedOption, filteredProjects: null });
    }
  };

  handlePageSelect = selectedPage => e => {
    e.preventDefault();
    let { perPage, selectedOption, pageCount } = this.state;
    let startingProject = (selectedPage - 1) * perPage;
    let { projects } = this.props;
    let filteredProjects = [];
    if (selectedOption) {
      projects.map(project => {
        if (project.languages.length) {
          if (project.languages.includes(selectedOption.value)) {
            filteredProjects.push(project);
          }
        }
        this.setState({
          selectedPage,
          filteredProjects:
            pageCount === selectedPage
              ? filteredProjects.slice(startingProject)
              : filteredProjects.slice(
                  startingProject,
                  startingProject + perPage
                )
        });
      });
    } else {
      this.setState({
        selectedPage,
        projects:
          pageCount === selectedPage
            ? this.props.projects.slice(startingProject)
            : this.props.projects.slice(
                startingProject,
                startingProject + perPage
              )
      });
    }
  };

  handlePrevious = selectedPage => e => {
    e.preventDefault();
    this.setState({
      selectedPage: selectedPage - 1
    });
  };

  handleNext = selectedPage => () => {
    this.setState({ selectedPage: selectedPage + 1 });
  };

  render() {
    const {
      selectedOption,
      filteredProjects,
      projects,
      pageCount
    } = this.state;

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
            placeholder="Search for project by programming language..."
            isClearable={true}
          />
        </div>
        <Card.Group centered itemsPerRow={3}>
          <PaginateProjects
            projects={filteredProjects || projects}
            selectedOption={this.state.selectedOption}
            breakLabel={"..."}
            pageCount={this.state.pageCount}
            pageRangeDisplayed={7}
            activeClassName={"active"}
          />
        </Card.Group>
        <PaginationLinks
          handlePrevious={this.handlePrevious}
          handleNext={this.handleNext}
          pageCount={pageCount}
          selectedPage={this.state.selectedPage}
          handlePageSelect={this.handlePageSelect}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({ projects: store.projects });
export default connect(
  mapStateToProps,
  { fetchProjects }
)(ProjectsList);
