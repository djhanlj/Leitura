import React, { Fragment } from 'react'
import { Row, Col, Badge, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux'
import Vote from './Vote'
import Order from './Order'
import { formatDate } from '../utils/helpers'
import { Link, withRouter } from 'react-router-dom'

const Posts = ({ arrayPosts }) => {
  return (
    <Fragment>
      <hr />
      <Order />
      <hr />
      {arrayPosts.map((post) => (
        <Fragment key={post.id}>
          <div className="post-preview">
            <h2 className="post-title">
              <Link to={`/${post.category}/${post.id}`} >
                {post.title}
              </Link>
            </h2>
            <p className="post-meta">
              Posted by {post.author} on {formatDate(post.timestamp)}
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
              <Vote objeto={post} typeObject={'post'} />
            </Row>
          </div>
          <hr />
        </Fragment>
      ))}
    </Fragment>
  )
}


function mapStateToProps({ posts }, { category }) {
  const arrayPosts = category ? posts.filter(post => post.category === category) : posts
  return {
    posts,
    category,
    arrayPosts,
  }
}


export default withRouter(connect(mapStateToProps)(Posts));
