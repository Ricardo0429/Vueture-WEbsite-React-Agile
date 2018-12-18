import React, { Component } from "react";
import { Menu, Container, Grid } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { DropdownMenu } from "./DropdownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import AVLogoInverse from "../images/av-logo-inverse.png";
import "../assets/Navbar.css";
export class Navbar extends Component {
  state = { activeItem: "/" };
  componentDidMount() {
    const {
      location: { pathname }
    } = this.props;
    if (pathname.length > 1) {
      this.setState({ activeItem: pathname.slice(1) });
    } else {
      this.setState({ activeItem: pathname });
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.history.push(name);
  };

  handleDropdownItemClick = (e, { name }) => {
    this.setState({ activeItem: "events" });
    this.props.history.push(name);
  };

  handleActiveItem = () => {
    this.setState({ activeItem: "events" });
  };

  render() {
    const element = (
      <FontAwesomeIcon icon={faSearch} size="lg" color="white" pull="right" />
    );
    const { activeItem } = this.state;
    return (
      <div>
        <div>
          <Menu id="main-header" fixed="top">
            <Container>
              <Menu.Item name="/" onClick={this.handleItemClick}>
                <img src={AVLogoInverse} className="navbar-brand" alt="AgileVentures logo"/>
              </Menu.Item>
              <Menu.Item
                history={this.props.history}
                name="sign-in"
                active={activeItem === "sign-in"}
                onClick={this.handleItemClick}
                position="right"
              >
                Sign In
              </Menu.Item>
              <Menu.Item
                name="sign-up"
                active={activeItem === "sign-up"}
                onClick={this.handleItemClick}
              >
                Sign Up
              </Menu.Item>
            </Container>
          </Menu>
        </div>
        <div>
          <Menu id="nav" fixed="top" pointing secondary>
            <Container>
              <Grid container={true}>
                <Grid.Row>
                  <Grid.Column width={3} />
                  <Menu.Item
                    name="about-us"
                    active={activeItem === "about-us"}
                    onClick={this.handleItemClick}
                  >
                    About Us
                  </Menu.Item>

                  <Menu.Item
                    name="projects"
                    active={activeItem === "projects"}
                    onClick={this.handleItemClick}
                  >
                    Projects
                  </Menu.Item>

                  <Menu.Item
                    name="members"
                    active={activeItem === "members"}
                    onClick={this.handleItemClick}
                  >
                    Members
                  </Menu.Item>

                  <Menu.Item
                    name="premium"
                    active={activeItem === "premium"}
                    onClick={this.handleItemClick}
                  >
                    Premium
                  </Menu.Item>

                  <DropdownMenu
                    handleActiveItem={this.handleActiveItem}
                    handleDropdownItemClick={this.handleDropdownItemClick}
                  />

                  <Menu.Item
                    name="getting-started"
                    active={activeItem === "getting-started"}
                    onClick={this.handleItemClick}
                  >
                    Getting Started
                  </Menu.Item>
                  <Menu.Item>{element}</Menu.Item>
                </Grid.Row>
              </Grid>
            </Container>
          </Menu>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);