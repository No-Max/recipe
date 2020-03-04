import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import routes from './routes.js';

import Head from './components/Head';


export default function () {
  return (
    <Router>
      <Head />
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} exact path={route.path} component={route.component}/>
        ))}
      </Switch>
    </Router>
  );
}