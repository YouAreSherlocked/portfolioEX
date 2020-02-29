import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Home/Home';
import ErrorPage from './ErrorPage/ErrorPage'

class AppRouter extends Component {
    
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route component={ErrorPage}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouter;