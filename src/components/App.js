import React, { Component } from 'react';
import { handleInitialData } from '../actions'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'

class App extends Component {

  componentWillMount() {
    const { loadData } = this.props
    loadData()
  }

  render() {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(handleInitialData()),
  }

}

export default connect(null, mapDispatchToProps)(App);
