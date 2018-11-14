import React, { Component, Fragment } from 'react'
import { Grid, Row, Col, Badge } from 'react-bootstrap';
import { connect } from 'react-redux'
import Vote from './Vote'
import { formatDate } from '../utils/helpers'

class Posts extends Component {

  render() {
    const { posts, dispatch, category } = this.props
    var arrayPosts
    arrayPosts = category ? posts.filter(post => post.category === category) : posts

    return (
      <Grid className="body">
        <Row className="show-grid">
          <Col lg={8} md={10}>
            { /** Title */}
            <h1>Blog Post </h1>
            {arrayPosts.map((post, index) => (
              <Fragment key={index}>
                <div className="post-preview">
                  <a href="post.html">
                    <h2 className="post-title">
                      {post.title}
                    </h2>
                    <h3 className="post-subtitle">
                      {post.body}
                    </h3>
                  </a>
                  <p className="post-meta">Posted by
                       <a>{post.author}</a> on {formatDate(post.timestamp)}
                  </p>
                  <Row className="show-grid">
                    <Col md={2}>
                      <p className="post-meta">Votos <Badge>{post.voteScore}</Badge></p>
                    </Col>
                    <Vote dispatch={dispatch} post={post} />
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

export default connect(mapStateToProps)(Posts);
