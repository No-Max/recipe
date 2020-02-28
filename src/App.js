import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './views/Home';
import Recipe from './views/Recipe';

import Head from './components/Head';

export default function RecipeList (props) {
  return (
    <Router>
      <Head />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/recipe/:id" component={Recipe}/>
      </Switch>
    </Router>
  );
}