import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ReactDOM from "react-dom";
import App from "./App";
import AboutUs from "./AboutUs";
import UsersList from "./containers/UsersList";
import registerServiceWorker from "./registerServiceWorker";
import { Container, Grid } from "semantic-ui-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Container className="main-content">
        <Grid>
          <Grid.Row>
            <Grid.Column width={12}>
              <Switch>
                <Route path="/about-us" component={AboutUs} />
                <Route path="/users" component={UsersList} />
                <Route path="/" component={App} />
              </Switch>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
