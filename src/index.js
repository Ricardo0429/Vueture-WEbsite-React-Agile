import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AboutUs from './AboutUs';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EventsList from './components/EventsList';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} />
      <Route path='/about-us' component={AboutUs} />
      <Route path='/events' component={EventsList} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
