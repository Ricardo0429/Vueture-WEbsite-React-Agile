import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchProjects } from "../actions/getProjectsAction";
import Project from "../components/Project";

export class ProjectsList extends Component {
  componentDidMount() {
    if (!this.props.projects.length) {
      this.props.fetchProjects();
    }
  }
  renderProject() {
    const { projects } = this.props;
    if (projects.length > 0) {
      console.log(this.props)
      return projects.map(project => (
        <Project key={project.id} project={project} />
      ));
    }
  }
  render() {
    return (
      <Card.Group centered itemsPerRow={3}>
        {this.renderProject()}
      </Card.Group>
    );
  }
}

const mapStateToProps = store => ({ projects: store.projects });
export default connect(
  mapStateToProps,
  { fetchProjects }
)(ProjectsList);
