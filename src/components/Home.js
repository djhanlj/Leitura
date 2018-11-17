import React, { Component } from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Posts from './Posts'
import { Link } from 'react-router-dom'
import { toUpperCaseText } from '../utils/helpers'

class Home extends Component {

  render() {
    const { category } = this.props.match.params

    return (
      <Grid className="body">
        <Row className="show-grid">
          <Col lg={10} md={9}>
            <h1>Post {toUpperCaseText(category)} </h1>
          </Col>
          <Col lg={2} md={2}>
            <h3 className="post-title">
              <Link to={`/post/create`} >
                <Button bsStyle="primary">
                  Criar Post
                </Button>
              </Link>
            </h3>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col lg={10} md={12}>
            <Posts category={category} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Home;
