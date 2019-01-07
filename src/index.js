import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ReactDOM from "react-dom";
import App from "./App";
import AboutUs from "./AboutUs";
import UsersList from "./containers/UsersList";
import UserProfile from "./containers/UserProfile";
import registerServiceWorker from "./registerServiceWorker";
import { Container } from "semantic-ui-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import "./assets/semantic.min.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Container className="main-content">
        <Switch>
          <Route
            path="/users/:id"
            render={props => <UserProfile {...props} />}
          />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/users" component={UsersList} />
          <Route path="/" component={App} />
        </Switch>
      </Container>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
