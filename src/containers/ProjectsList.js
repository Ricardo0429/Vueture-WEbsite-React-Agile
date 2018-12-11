import React, { Component, Fragment } from "react";
import { Card, Header, Pagination } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchProjects } from "../actions/getProjectsAction";
import Project from "../components/Project";
import { Link } from "react-router-dom";
import Select from "react-select";
import "../assets/ProjectsList.css";
export class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      projects: [],
      activePage: 5,
      boundaryRange: 1,
      siblingRange: 1,
      showEllipsis: true,
      showFirstAndLastNav: true,
      showPreviousAndNextNav: true,
      totalPages: 20
    };
  }

  componentDidMount() {
    if (!this.props.projects.length) {
      this.props.fetchProjects();
    }
  }
  renderProject() {
    const { projects } = this.props;
    if (this.state.selectedOption) {
      return this.state.projects.map(project => (
        <Project key={project.id} project={project} />
      ));
    } else if (projects.length > 0) {
      return projects.map(project => (
        <Project key={project.id} project={project} />
      ));
    }
  }

  languagesSelectObject() {
    let projectsLanguages = [];
    this.props.projects.map(project => {
      if (project.languages.length > 0) {
        projectsLanguages.push.apply(projectsLanguages, project.languages);
      }
      projectsLanguages = projectsLanguages.filter((item, pos) => {
        return projectsLanguages.indexOf(item) === pos;
      });
    });
    let languages = projectsLanguages.map(language => ({
      label: language,
      value: language
    }));
    return languages;
  }

  handleChange = selectedOption => {
    let filteredProjects = [];
    return this.props.projects.map(project => {
      if (project.languages.length > 0) {
        return project.languages.map(lang => {
          if (lang === selectedOption.value) {
            filteredProjects.push(project);
          }
        });
      }
      this.setState({ selectedOption, projects: filteredProjects });
    });
  };

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage });

  render() {
    const {
      activePage,
      boundaryRange,
      siblingRange,
      showEllipsis,
      showFirstAndLastNav,
      showPreviousAndNextNav,
      totalPages,
      selectedOption
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
            options={this.languagesSelectObject()}
            onChange={this.handleChange}
            placeholder="Search for project by programming language"
          />
        </div>
        <Card.Group centered itemsPerRow={3}>
          {this.renderProject()}
        </Card.Group>
        <Pagination
          activePage={activePage}
          boundaryRange={boundaryRange}
          onPageChange={this.handlePaginationChange}
          size="mini"
          siblingRange={siblingRange}
          totalPages={totalPages}
          // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
          ellipsisItem={showEllipsis ? undefined : null}
          firstItem={showFirstAndLastNav ? undefined : null}
          lastItem={showFirstAndLastNav ? undefined : null}
          prevItem={showPreviousAndNextNav ? undefined : null}
          nextItem={showPreviousAndNextNav ? undefined : null}
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
