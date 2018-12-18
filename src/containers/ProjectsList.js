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
      projectsList: [],
      projects: {},
      filteredProjectsList: null,
      filteredProjects: {},
      pageCount: null,
      perPage: 12,
      totalProjects: null,
      selectedPage: 1,
      lastPage: true,
      firstPage: true
    };
  }

  componentDidMount() {
    if (!this.props.projects.length) {
      this.props.fetchProjects().then(() => {
        if (this.props.projects.length) {
          let pageCount = Math.ceil(this.props.projects.length / 12);
          let projects = {};
          let lastIndex = 0;
          for (let i = 1; i <= pageCount; i++) {
            if (i === 1) {
              projects[i] = this.props.projects.slice(i - 1, i + 11);
              lastIndex = i + 11;
            } else {
              projects[i] = this.props.projects.slice(
                lastIndex,
                lastIndex + 12
              );
              lastIndex += 12;
            }
          }

          this.setState({
            projects,
            pageCount,
            projectsList: projects[1],
            totalProjects: this.props.projects.length,
            lastPage: false
          });
        }
      });
    }
  }

  handlePopulateLanguagesDropdown() {
    let lang = new Set();
    let { projects } = this.props;
    projects.forEach(project => {
      if (project.languages.length) {
        return project.languages.forEach(lang.add, lang);
      }
    });
    return [...lang].map(lang => ({ label: lang, value: lang }));
  }

  handleFilterProjects = selectedOption => {
    let { projects } = this.props;

    if (selectedOption) {
      let filteredProjectsList = projects.filter(project =>
        project.languages.includes(selectedOption.value)
      );
      let pageCount = Math.ceil(filteredProjectsList.length / 12);
      let filteredProjects = {};
      let lastIndex = 0;
      for (let i = 1; i <= pageCount; i++) {
        if (i === 1) {
          filteredProjects[i] = filteredProjectsList.slice(i - 1, i + 11);
          lastIndex = i + 11;
        } else {
          filteredProjects[i] = filteredProjectsList.slice(
            lastIndex,
            lastIndex + 12
          );
          lastIndex += 12;
        }
      }
      this.setState({
        selectedOption,
        filteredProjects,
        filteredProjectsList: filteredProjects[1],
        pageCount
      });
    } else {
      this.setState({
        selectedOption,
        filteredProjectsList: null,
        pageCount: Math.ceil(this.props.projects.length / 12)
      });
    }
  };

  handlePageSelect = selectedPage => e => {
    e.preventDefault();
    let { selectedOption } = this.state;
    if (selectedOption) {
      this.setState({
        selectedPage,
        filteredProjectsList: this.state.filteredProjects[selectedPage],
        firstPage: selectedPage - 1 < 1 ? true : false,
        lastPage: selectedPage + 1 > this.state.pageCount ? true : false
      });
    } else {
      this.setState({
        selectedPage,
        projectsList: this.state.projects[selectedPage],
        firstPage: selectedPage - 1 < 1 ? true : false,
        lastPage: selectedPage + 1 > this.state.pageCount ? true : false
      });
    }
  };

  handlePrevious = selectedPage => e => {
    e.preventDefault();
    if (selectedPage - 1 <= 1) {
      this.setState({
        firstPage: true,
        selectedPage: selectedPage - 1,
        projectsList: this.state.projects[selectedPage - 1]
      });
      return;
    }

    if (this.state.filteredProjectsList) {
      this.setState({
        selectedPage: selectedPage - 1,
        filteredProjectsList: this.state.filteredProjects[selectedPage - 1],
        lastPage: false
      });
    } else {
      this.setState({
        selectedPage: selectedPage - 1,
        projectsList: this.state.projects[selectedPage - 1],
        lastPage: false
      });
    }
  };

  handleNext = selectedPage => e => {
    e.preventDefault();
    if (selectedPage + 1 >= this.state.pageCount) {
      this.setState({
        lastPage: true,
        selectedPage: selectedPage + 1,
        projectsList: this.state.projects[selectedPage + 1]
      });
      return;
    }

    if (this.state.filteredProjectsList) {
      this.setState({
        selectedPage: selectedPage + 1,
        filteredProjectsList: this.state.filteredProjects[selectedPage + 1],
        firstPage: false
      });
    } else {
      this.setState({
        selectedPage: selectedPage + 1,
        projectsList: this.state.projects[selectedPage + 1],
        firstPage: false
      });
    }
  };

  render() {
    const {
      selectedOption,
      filteredProjectsList,
      projectsList,
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
            options={this.handlePopulateLanguagesDropdown()}
            onChange={this.handleFilterProjects}
            placeholder="Search for project by programming language..."
            isClearable={true}
          />
        </div>
        <Card.Group centered itemsPerRow={3}>
          <PaginateProjects
            projects={filteredProjectsList || projectsList}
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
          firstPage={this.state.firstPage}
          lastPage={this.state.lastPage}
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
