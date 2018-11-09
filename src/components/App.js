import React, { Component } from 'react';
import { handleInitialData } from '../actions'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'



class App extends Component {

  componentDidMount(){
    console.log("app____")
    this.props.dispatch(handleInitialData())
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
