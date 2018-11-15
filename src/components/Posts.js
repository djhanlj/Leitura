import React, { Component, Fragment } from 'react'
import { Grid, Row, Col, Badge } from 'react-bootstrap';
import { connect } from 'react-redux'
import Vote from './Vote'
import { formatDate } from '../utils/helpers'
import { Link, withRouter } from 'react-router-dom'

class Posts extends Component {

  render() {
    const { posts, dispatch, category } = this.props
    let arrayPosts
    arrayPosts = category ? posts.filter(post => post.category === category) : posts

    return (
      <Grid className="body">
        <Row className="show-grid">
          <Col lg={8} md={10}>
            <h1>Post {category} </h1>
            {arrayPosts.map((post, index) => (
              <Fragment key={index}>
                <div className="post-preview">
                  <a href="post.html">
                    <h2 className="post-title">
                    <Link to={`/${post.category}/${post.id}`} >
                      {post.title}
                    </Link>  
                    </h2>
                  </a>
                  <p className="post-meta">Posted by
                       <a>{post.author}</a> on {formatDate(post.timestamp)}
                  </p>
                  <Row className="show-grid">
                    <Col md={2}>
                      <p className="post-meta">Votos <Badge>{post.voteScore}</Badge></p>
                    </Col>
                    <Vote dispatch={dispatch} objeto={post} typeObject={'post'} />
                  </Row>
                </div>
                <hr />
              </Fragment>
            ))}
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps({ posts }, { category }) {
  return {
    posts,
    category,
  }
}

export default withRouter(connect(mapStateToProps)(Posts));
