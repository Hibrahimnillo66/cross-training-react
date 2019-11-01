import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostList from './PostList';
import FullPost from './FullPost';

const Routes = () => (
  <Fragment>
    <Router>
      {/* this route should contain your main component, 
      that means your main route '/' or home page */}
      <Route />
      {/* Dianamic routing: remeber each post must have its own 
      route, and what happens if the user creates a new one? 
      well... we do dynamic routes. Remeber map? */}
    </Router>
  </Fragment>
);

export default Routes;
