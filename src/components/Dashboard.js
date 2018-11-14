import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Home from './Home';
import Category from './Category';
import Navbar from './CustomNavBar';


class Dashboard extends Component {

   verificaCategories(){
    return (this.props && this.props.categories.length > 0)
     ? true
     : false
   } 
 
  render() {

    return (
      <Router>
         <Fragment>
          <Navbar categories = { this.verificaCategories ? this.props.categories : null } />
          <Route exact path="/" component={Home} />
          <Route path="/:category" component={ Category } />
          </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({categories}){
  return {
    categories
  }
}

export default connect(mapStateToProps)(Dashboard);
