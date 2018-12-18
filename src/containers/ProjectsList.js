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
      projectsList: [],
      projects: {},
      filteredProjectsList: null,
      filteredProjects: {},
      pageCount: null,
      perPage: 12,
      totalProjects: null,
      selectedPage: 1,
      lastPage: true,
      firstPage: true,
      selectedLanguage: null,
      languages: []
    };
  }

  componentDidMount() {
    if (!this.props.projects.length) {
      this.props.fetchProjects();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.projects.length !== nextProps.projects.length) {
      this.normalizeProjects(nextProps.projects);
    }
  }

  normalizeProjects(projects) {
    let pageCount = Math.ceil(projects.length / 12);
    let normalizedProjects = {};
    let lastIndex = 0;
    
    for (let i = 1; i <= pageCount; i++) {
      if (i === 1) {
        normalizedProjects[i] = projects.slice(i - 1, i + 11);
        lastIndex = i + 11;
      } else {
        normalizedProjects[i] = projects.slice(lastIndex, lastIndex + 12);
        lastIndex += 12;
      }
    }

    let languages = new Set();
    projects.forEach(project => {
      if (project.languages.length) {
        return project.languages.forEach(languages.add, languages);
      }
    });

    [...languages].forEach(lang => {
      let filteredProjects = projects.filter(project =>
        project.languages.includes(lang)
      );
      this.normalizeFilteredProjects(
        filteredProjects,
        lang,
        normalizedProjects
      );
    });

    this.setState({
      projects: normalizedProjects,
      pageCount,
      projectsList: normalizedProjects[1],
      totalProjects: projects.length,
      lastPage: false,
      languages: [...languages]
    });
  }

  normalizeFilteredProjects = (items, lang, normalizedProjects) => {
    let lastIndex = 0;
    let pageCount = [...Array(Math.ceil(items.length / 12 + 1)).keys()];
    normalizedProjects[lang] = pageCount.reduce((acc, next) => {
      if (next === 0) {
        acc = { [next + 1]: items.slice(next, next + 12) };
        lastIndex = next + 12;
        return acc;
      } else {
        acc[next +1] = items.slice(lastIndex, lastIndex + 12);
        lastIndex = next + 12;
        return acc;
      }
    }, {});
  };

  handlePopulateLanguagesDropdown() {
    return this.state.languages.map(lang => ({ label: lang, value: lang }));
  }

  handleFilterProjects = selectedLanguage => {
    if (selectedLanguage) {
      this.setState({
        selectedLanguage,
        filteredProjectsList: this.state.projects[selectedLanguage.value][1],
        pageCount: Object.keys(this.state.projects[selectedLanguage.value]).length
      });
    } else {
      this.setState({
        selectedLanguage: null,
        pageCount: Math.ceil(this.props.projects.length / 12)
      });
    }
  };

  handlePageSelect = selectedPage => e => {
    e.preventDefault();
    let { selectedLanguage, projects } = this.state;
    if (selectedLanguage) {
      this.setState({
        selectedPage,
        filteredProjectsList: projects[selectedLanguage.value][selectedPage],
        firstPage: selectedPage - 1 < 1 ? true : false,
        lastPage: selectedPage + 1 > this.state.pageCount ? true : false
      });
    } else {
      this.setState({
        selectedPage,
        projectsList: projects[selectedPage],
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
      projectsList,
      selectedLanguage,
      pageCount,
      filteredProjectsList
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
            value={selectedLanguage}
            options={this.handlePopulateLanguagesDropdown()}
            onChange={this.handleFilterProjects}
            placeholder="Search for project by programming language..."
            isClearable={true}
          />
        </div>
        <Card.Group centered itemsPerRow={3}>
          <PaginateProjects
            projects={filteredProjectsList || projectsList}
            selectedOption={this.state.selectedLanguage}
            pageCount={this.state.pageCount}
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
