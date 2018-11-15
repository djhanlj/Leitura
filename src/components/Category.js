import React, { Component } from 'react'
import { Grid } from 'react-bootstrap';
import Posts from './Posts'

class Category extends Component {
  render() {
    const { category } = this.props.match.params
    return (
      <Grid className="body">
        <Posts category={category} />
      </Grid>
    )
  }
}

export default Category;
