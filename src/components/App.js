import React, { Component } from 'react';
import '../App.css';
import { fetchCategories} from '../actions'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'


class App extends Component {

  componentDidMount(){
    this.props.dispatch(fetchCategories())
  }

  render() {
    return (
        <div>
          <Dashboard />
        </div>
    );
  }
}
export default connect()(App);
//export default App;
