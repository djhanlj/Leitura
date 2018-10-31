import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../App.css';
import Home from './Home';
import Categories from './Categories';
import Navbar from './CustomNavBar';

import { receiveCategories, fetchCategories} from '../actions'
import { connect } from 'react-redux'

import keyIndex from 'react-key-index';
import * as API from '../utils/LeituraAPI'

class App extends Component {

  state = {
    categories: []
  }

  componentDidMount(){
    API.getCategories().then((categories) => {
      this.setState({categories})
    })
  }


  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          {  this.state.categories.map((categoria, index) => (
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

/*function mapDispatchToProps(dispatch) {
	return {
		requestCategories: () => dispatch(fetchCategories())
	}
}*/



export default connect(mapStateToProps)(App);
//export default App;
