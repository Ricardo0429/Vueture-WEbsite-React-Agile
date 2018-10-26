import React, { Component } from "react";
import { Menu, Segment, Dropdown } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

export class Navbar extends Component {
  state = { activeItem: "agileVentures" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });

    this.props.history.push(name);
  };
  handleDropdowntemClick = (e, { name }) => {
    this.setState({ activeItem: "events" });

    this.props.history.push(name);
  };
  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            header
            name="/"
            active={activeItem === "/"}
            onClick={this.handleItemClick}
          >
            AgileVentures
          </Menu.Item>

          <Menu.Item
            name="getting-started"
            active={activeItem === "getting-started"}
            onClick={this.handleItemClick}
          >
            Getting Started
          </Menu.Item>
          <Menu.Item
            name="about-us"
            active={activeItem === "about-us"}
            onClick={this.handleItemClick}
          >
            About Us
          </Menu.Item>
          <Dropdown
            item
            text="Events"
            active={activeItem === "events"}
            onClick={() => this.setState({ activeItem: "events" })}
          >
            <Dropdown.Menu>
              <Dropdown.Item name="events" onClick={this.handleDropdownItemClick}>
                Upcoming Events
              </Dropdown.Item>
              <Dropdown.Item name="hangouts" onClick={this.handleDropdownItemClick}>
                Live Events
              </Dropdown.Item>
              <Dropdown.Item name="hangouts" onClick={this.handleDropdownItemClick}>
                Past Events
              </Dropdown.Item>
              <Dropdown.Item name="new" onClick={this.handleDropdownItemClick}>
                Create an Event
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item
            history={this.props.history}
            name="sign-in"
            active={activeItem === "sign-in"}
            onClick={this.handleItemClick}
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
        </Menu>
      </Segment>
    );
  }
}

export default withRouter(Navbar);
