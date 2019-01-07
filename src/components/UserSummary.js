import React, { Fragment } from "react";
import { Card, Image, Grid, Label } from "semantic-ui-react";
import { RingLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faCalendarAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import moment from "moment";
import { Tab, Embed } from "semantic-ui-react";
import "../assets/UserSummary.css";

const UserSummary = props => {
  let { user } = props;
  if (user) {
    const usersProjectsList = user.contributions
      .sort((a, b) => b - a)
      .slice(0, 6);
    const usersActiveProjects = [];
    user.projects.map(project => {
      usersProjectsList.map(usersProject => {
        if (usersProject.project_id === project.id) {
          usersActiveProjects.push(project);
        }
      });
    });
    const panes = [
      {
        menuItem: "Bio",
        render: () => <Tab.Pane attached={false}>{user.bio}</Tab.Pane>
      },
      {
        menuItem: "Skills",
        render: () => (
          <Tab.Pane attached={false}>
            <div className="user-profile-skills">
              {user.skill_list.map(skill => (
                <Label key={skill}>{skill}</Label>
              ))}
            </div>
          </Tab.Pane>
        )
      },
      {
        menuItem: "Projects",
        render: () => (
          <Tab.Pane attached={false}>
            <Card.Group itemsPerRow={2}>
              {usersActiveProjects.map(project => (
                <Card key={project.id}>
                  <Card.Content>
                    <Card.Header>
                      <a href={`/projects/${project.slug}`}>{project.title}</a>
                    </Card.Header>
                    <Card.Description>
                      {project.description.substring(0, 150) + "..."}
                    </Card.Description>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </Tab.Pane>
        )
      },
      {
        menuItem: "Activity",
        render: () => (
          <Tab.Pane attached={false} className="user-profile-activity">
            <h5>
              Contributions (GitHub) - {user.commit_count_total} total commits x
              1 - {user.commit_count_total}
              <FontAwesomeIcon
                icon={faFire}
                className="user-profile-activity-icon"
              />
            </h5>
            <ul>
              {user.projects.map(project => {
                return user.contributions.map(usersProject => {
                  if (usersProject.project_id === project.id) {
                    return (
                      <li key={user.id}>
                        <a>{project.title}</a> - {usersProject.commit_count}{" "}
                        commits
                      </li>
                    );
                  }
                });
              })}
            </ul>
            <h5>
              Contributions (Hangouts Attended) - {user.hangouts} total hangouts
              x 1 - {user.hangouts}{" "}
              <FontAwesomeIcon
                icon={faFire}
                className="user-profile-activity-icon"
              />
            </h5>
            <h5>
              Contributions (Authentications) - {user.authentications}{" "}
              authentications x 100 - {parseInt(user.authentications) * 100}
              <FontAwesomeIcon
                icon={faFire}
                className="user-profile-activity-icon"
              />
            </h5>
            <h5>
              Contributions (Profile Completeness) - {user.profile} out of 10
              <FontAwesomeIcon
                icon={faFire}
                className="user-profile-activity-icon"
              />
            </h5>
            <h5>
              Contributions (Membership Length) - {user.membership_length} out
              of 6
              <FontAwesomeIcon
                icon={faFire}
                className="user-profile-activity-icon"
              />
            </h5>
            <h5>
              Contributions (Sign In Activity) - {user.activity} out of 6
              <FontAwesomeIcon
                icon={faFire}
                className="user-profile-activity-icon"
              />
            </h5>
          </Tab.Pane>
        )
      }
    ];

    return (
      <Fragment>
        <Grid columns={3} doubling={true} stackable={true}>
          <Grid.Row>
            <Grid.Column width={4}>
              <Card className="user-profile-card">
                <Image
                  src={`${user.gravatar_url}`}
                  className="user-profile-image"
                />
                <Card.Content>
                  <Card.Header className="user-profile-name">
                    <Grid>
                      <Grid.Row>
                        {user.first_name
                          ? user.first_name + " " + user.last_name
                          : user.slug.substring(0, 15)}{" "}
                        <p className="user-profile-karma">
                          <FontAwesomeIcon icon={faFire} size="lg" /> {}
                          {user.karma_total}
                        </p>
                      </Grid.Row>
                    </Grid>
                  </Card.Header>
                  <Card.Meta>
                    {user.title_list.length
                      ? user.title_list.map(title => title + " ")
                      : null}
                  </Card.Meta>
                  <Card.Description>
                    <Grid>
                      <Grid.Row>
                        <FontAwesomeIcon
                          icon={faCalendarAlt}
                          size="lg"
                          className="font-awesome-icon"
                        />
                        Member for {moment().diff(user.created_at, "years")}{" "}
                        years
                      </Grid.Row>
                    </Grid>
                  </Card.Description>
                  <Card.Description>
                    <Grid>
                      <Grid.Row>
                        <FontAwesomeIcon
                          icon={faGithubAlt}
                          size="lg"
                          className="font-awesome-icon"
                        />
                        <a href={user.github_profile_url}>
                          {user.github_profile_url.replace(
                            "https://github.com/",
                            ""
                          )}
                        </a>
                      </Grid.Row>
                    </Grid>
                  </Card.Description>
                  <Card.Description>
                    <Grid>
                      <Grid.Row>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          size="lg"
                          className="font-awesome-icon"
                        />
                        <a href={"mailto:" + user.email}>
                          {user.email.substring(0, 25) + "..."}
                        </a>
                      </Grid.Row>
                    </Grid>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={8}>
              <Tab
                menu={{ secondary: true, pointing: true }}
                panes={panes}
                className="user-profile-tabs"
              />
            </Grid.Column>
            <Grid.Column width={4} className="user-profile-videos">
              {console.log(user.videos)}
              {user.videos
                .filter(video => video.yt_video_id !== null)
                .map(video => (
                  <Fragment key={video.id}>
                    {console.log(video.yt_video_id)}
                    <Embed
                      id={video.yt_video_id}
                      placeholder={
                        "https://img.youtube.com/vi/" +
                        video.yt_video_id +
                        "/3.jpg"
                      }
                      source="youtube"
                    />
                    <p>{video.title}</p>
                  </Fragment>
                ))}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Fragment>
    );
  } else {
    return <RingLoader sizeUnit={"px"} size={200} color={"#34495E"} />;
  }
};

export default UserSummary;
