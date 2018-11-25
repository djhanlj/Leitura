import React, { Fragment } from 'react'
import { Row, Col, Badge, Glyphicon } from 'react-bootstrap'
import { connect } from 'react-redux'
import Votes from './Votes'
import { formatDate } from '../utils/helpers'
import { Link, withRouter } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'

const Posts = ({ arrayPostsQuery }) => {
  return (
    <Fragment>
      {arrayPostsQuery.map((post) => (
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
              <Votes objeto={post} typeObject={'post'} />
            </Row>
          </div>
          <hr />
        </Fragment>
      ))}
    </Fragment>
  )
}


function mapStateToProps({ posts }, { category, query }) {
  const arrayPosts = category ? posts.filter(post => post.category === category) : posts

  /**
   * @description condicional utilizado no filtro de Posts
   */
  let arrayPostsQuery
  if (query.length >= 3) {
    const match = new RegExp(escapeRegExp(query), 'i')
    arrayPostsQuery = arrayPosts.filter((post) => match.test(post.title))
  } else {
    arrayPostsQuery = arrayPosts
  }

  return {
    posts,
    category,
    arrayPostsQuery,
  }
}

export default withRouter(connect(mapStateToProps)(Posts));
