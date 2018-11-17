import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Home from './Home';
import Navbar from './CustomNavBar';
import PostDetail from './PostDetail';
import NewPost from './NewPost';

class Dashboard extends Component {
   verificaCategories(){
    return (this.props && this.props.posts.length > 0)
     ? true
     : false
   } 
 
  render() {
    return (
      <Router>
         <Fragment>
          {this.verificaCategories 
              ? <div>
              <Navbar categories = { this.props.categories } />
              <Route exact path="/:category?" component={Home} />
              <Route path={`/:category/:post_id` } component={ PostDetail } />
              <Route path={`/post/create` } component={ NewPost } />
              <Route path={`/post/edit/:post_id` } component={ NewPost } />
              </div>
              : null }

          </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({categories, posts}){
  return {
    categories,
    posts,
  }
}

export default connect(mapStateToProps)(Dashboard);
