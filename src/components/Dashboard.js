import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../App.css';
import Home from './Home';
import Navbar from './CustomNavBar';
import { connect } from 'react-redux'


class Dashboard extends Component {
 
  render() {
    console.log("inicio" + this.props.categories)
    return (
      <Router>
        <div>
          <Navbar categories={this.props.categories} />
          <Route exact path="/" component={Home} />
          {  this.props.categories.map((categoria, index) => (
            <Route key={index}  path={ categoria.path} component={categoria.name } /> 
            ))}
           
          </div>
      </Router>
    );
  }
}


function mapStateToProps({categories}){
  return {
    categories,
  }
}



export default connect(mapStateToProps)(Dashboard);
//export default App;
