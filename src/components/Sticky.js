import React, { Component } from "react";
export default class Sticky extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        scrollingLock: true
      });
    } else if (window.scrollY < 100) {
      this.setState({
        scrollingLock: false
      });
    }
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          position: this.state.scrollingLock ? "fixed" : "relative",
          zIndex:999
        
        }}
      >
        {this.props.children}
      </div>
    );
  }
}