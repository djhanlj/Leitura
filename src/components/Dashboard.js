import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import Home from './Home';
import Navbar from './CustomNavBar';
import PostDetail from './PostDetail';
import PostForm from './PostForm';
import NotFoundPage from './NotFoundPage';
import If from './If';

const Dashboard = ({ posts, categories }) => {

  return (
    <Router>
      <Fragment>
        <If test={posts.length > 0}>
          <Navbar categories={categories} />
          <Switch>
            <Route exact path="/:category?" component={Home} />
            <Route path={`/post/create`} component={PostForm} />
            <Route path={`/post/edit/:post_id`} component={PostForm} />
            <Route path={`/:category/:post_id`} component={PostDetail} />
            <Route component={NotFoundPage} />
          </Switch>
        </If>
      </Fragment>
    </Router>
  );
}

function mapStateToProps({ categories, posts }) {
  return {
    categories,
    posts,
  }
}

export default connect(mapStateToProps)(Dashboard);
