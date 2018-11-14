import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { Grid, Row, Col, Image, Button, Glyphicon, Badge } from 'react-bootstrap';
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'
import { handleToggleVote } from '../actions/post'
import Vote from './Vote'

class Home extends Component {

  render() {
    const { posts, dispatch } = this.props
    return (
      <Grid className="body">
        <Row className="show-grid">
          <Col lg={8} md={10}>
            { /** Title */}
            <h1>Blog Post </h1>
            {posts.map((post, index) => (
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
                        <a href="#">{post.author}</a> on {formatDate(post.timestamp)}
                  </p>
                  <Row className="show-grid">
                    <Col md={2}>
                      <p className="post-meta">Votos <Badge>{post.voteScore}</Badge></p>
                    </Col>
                    <Vote dispatch={dispatch} post={post}  />
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

function mapStateToProps({ posts }) {
  return {
    posts
  }
}

export default connect(mapStateToProps)(Home);
