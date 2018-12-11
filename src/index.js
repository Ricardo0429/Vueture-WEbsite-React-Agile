import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import AboutUs from "./AboutUs";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Grid, Image, Header, Button } from "semantic-ui-react";
import EventsList from "./components/EventsList";
import Navbar from "./components/Navbar";
import ProjectsList from "./containers/ProjectsList";
import Standuply from "./images/standuply.png";
import Mooqita from "./images/mooqita.png";
import AmazonSmile from "./images/amazon_smile.png";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.Fragment>
        <Navbar />
        <Container className="main-content">
          <Grid>
            <Grid.Row>
              <Grid.Column width={12}>
                <Switch>
                  <Route exact path="/" component={App} />
                  <Route path="/about-us" component={AboutUs} />
                  <Route path="/projects" component={ProjectsList} />
                  <Route path="/events" component={EventsList} />
                  <Route path="/getting-started" component={EventsList} />
                </Switch>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header as='h2' textAlign="center">Supporters</Header>
                <Image src={Standuply} centered={true} className="supporter-images"/>
                <Image src={Mooqita} centered={true} className="supporter-images"/>
                <Image src={AmazonSmile} centered={true} className="supporter-images"/>
                <Button negative fluid>Become a Supporter</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </React.Fragment>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
