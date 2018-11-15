import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/helpers'
import { Grid, Row, Col, Badge } from 'react-bootstrap';

import Comment from './Comment'
import Vote from './Vote'

class PostDetail extends Component {

    render() {
        const { post, category, post_id, dispatch } = this.props
        console.log(post)

        return (
            <Grid className="body">
            <Row className="show-grid">
                {this.props.post ?
                    <Col md={8}>
                        <h1>{post.title}</h1>
                        <p className="lead">
                            <Link to={`/${category}`} >
                                <a>{category}</a>
                            </Link>
                        </p>
                        <hr />
                        <p>
                            <span className="glyphicon glyphicon-time"></span>
                            <a> {post.author}</a> on {formatDate(post.timestamp)}
                        </p>
                        <hr />
                        <p className="lead">{post.body}</p>

                        <Row className="show-grid">
                            <Col md={2}>
                                <p className="post-meta">Votos <Badge>{post.voteScore}</Badge></p>
                            </Col>
                            <Vote dispatch={dispatch} objeto={post} typeObject={'post'} />
                        </Row>
                        <hr />
                        <div className="well">
                            <h4>Leave a Comment:</h4>
                            <form role="form">
                                <div className="form-group">
                                    <textarea className="form-control" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>

                        <hr />
                        { /** Comment */}
                        <Comment post_id={post_id} />
                    </Col>
                    : null}
            </Row>
            </Grid>
        )
    }
}

function mapStateToProps({ posts }, { match }) {
    const { category, post_id } = match.params
    const post = posts.find(post => post.id === post_id)
    return {
        post,
        post_id,
        category,
    }
}

export default connect(mapStateToProps)(PostDetail);
