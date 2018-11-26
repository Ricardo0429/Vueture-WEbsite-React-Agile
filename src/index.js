import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
//import './index.css';
import App from "./App";
import AboutUs from "./AboutUs";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EventsList from "./components/EventsList";
import Navbar from "./components/Navbar";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/events" component={EventsList} />
          <Route path="/getting-started" component={EventsList} />
        </Switch>
      </React.Fragment>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
