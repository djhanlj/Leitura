import React, { Component } from 'react'
import { Grid } from 'react-bootstrap';
import Posts from './Posts'

class Home extends Component {

  render() {
    return (
      <Grid className="body">
        <Posts/>
      </Grid>
    )
  }
}

export default Home;
