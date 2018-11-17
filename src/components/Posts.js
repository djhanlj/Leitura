import React, { Component, Fragment } from 'react'
import { Row, Col, Badge, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux'
import Vote from './Vote'
import Order from './Order'
import { formatDate } from '../utils/helpers'
import { Link, withRouter } from 'react-router-dom'

class Posts extends Component {

  render() {
    const { posts, dispatch, category, arrayPosts } = this.props

    return (
      <Fragment>
        <hr />
        <Order dispatch={dispatch} />
        <hr />
        {arrayPosts.map((post, index) => (
          <Fragment key={index}>
            <div className="post-preview">
              <h2 className="post-title">
                <Link to={`/${post.category}/${post.id}`} >
                  {post.title}
                </Link>
              </h2>
              <p className="post-meta">Posted by
                   {post.author} on {formatDate(post.timestamp)}
              </p>
              <Row className="show-grid">
                <Col md={1}>
                  <p className="post-meta">
                    <Glyphicon glyph="comment" /> {post.commentCount}
                  </p>
                </Col>
                <Col md={2}>
                  <p className="post-meta">Votos <Badge>{post.voteScore}</Badge></p>
                </Col>
                <Vote dispatch={dispatch} objeto={post} typeObject={'post'} />
              </Row>
            </div>
            <hr />
          </Fragment>
        ))}
      </Fragment>
    )
  }
}

function mapStateToProps({ posts }, { category }) {

  //const arrayPosts
  const arrayPosts = category ? posts.filter(post => post.category === category) : posts
  console.log(arrayPosts)

  return {
    posts,
    category,
    arrayPosts,
  }
}

export default withRouter(connect(mapStateToProps)(Posts));
