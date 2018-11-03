import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../App.css';
import Home from './Home';
import Navbar from './CustomNavBar';
import { connect } from 'react-redux'


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
            { this.verificaCategories ? this.props.categories.map((categoria, index) => (
                <Route  key={categoria.name} path={ categoria.path} component={ Home } />
                )) : null }
          </Fragment>
      </Router>
    );
  }
}


function mapStateToProps(categories){
  return {
    categories
  }
}



export default connect(mapStateToProps)(Dashboard);
//export default App;
