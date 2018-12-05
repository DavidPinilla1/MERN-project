import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Auth from './hoc/auth';

import Home from './components/Home/home';
import BookView from './components/Books/index';
import Login from './containers/Admin/login';
import User from './components/Admin/index';
import AddReview from './containers/Admin/add';
const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home, true)} />
        <Route path="/login" exact component={Auth(Login, false)} />
        <Route path="/user" exact component={Auth(User, true)} />
        <Route path="/books/:id" exact component={Auth(BookView)} />
        <Route path="/user/add" exact component={Auth(AddReview, true)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
