import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import AboutUs from "./components/AboutUs";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EventsList from "./components/EventsList";
import Navbar from "./components/Navbar";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.Fragment>
        <Container className="main-content">
          <Navbar />
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/events" component={EventsList} />
            <Route path="/getting-started" component={EventsList} />
          </Switch>
        </Container>
      </React.Fragment>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
