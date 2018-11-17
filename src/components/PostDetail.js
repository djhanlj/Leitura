import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/helpers'
import { Grid, Row, Col, Badge, Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';

import Comment from './Comment'
import Vote from './Vote'
import NewComment from './NewComment'

import { handleRemovePost } from '../actions/post'

class PostDetail extends Component {

    removePost = (e, id) => {
        const { dispatch } = this.props
        e.preventDefault()

        dispatch(handleRemovePost(id))
        this.props.history.push(`/`)
      }


    render() {
        const { post, post_id, dispatch } = this.props
        return (
            <Grid className="body">
                <Row className="show-grid">
                    {this.props.post ?
                        <Col md={8}>
                            <Row className="show-grid">
                                <Col md={10}>
                                    <h1>{post.title}</h1>
                                    <p className="lead">
                                        <Link to={`/${post.category}`} >
                                            {post.category}
                                        </Link>
                                    </p>
                                </Col>
                            </Row>
                            <hr />
                            <Row className="show-grid">
                                <Col md={8}>
                                    <p>
                                        <span className="glyphicon glyphicon-time"> </span>
                                        {post.author} on {formatDate(post.timestamp)}
                                    </p>
                                </Col>
                                <Col md={4}>
                                    <ButtonToolbar>
                                        <Link to={`/post/edit/${post.id}`} >
                                            <Button bsSize="small" bsStyle="primary" title="Editar">
                                                <Glyphicon glyph="edit" />
                                            </Button>
                                        </Link>
                                        <Button bsSize="small" bsStyle="danger" title="Remover" onClick={(e) => this.removePost(e, post.id)} >
                                            <Glyphicon glyph="remove" />
                                        </Button>
                                    </ButtonToolbar>
                                </Col>
                            </Row>
                            <hr />
                            <Row className="show-grid">
                                <Col md={12}>
                                    <p className="lead">{post.body}</p>
                                </Col>
                            </Row>
                            <hr />
                            <Row className="show-grid">
                                <Col md={2}>
                                    <p className="post-meta">Votos <Badge>{post.voteScore}</Badge></p>
                                </Col>
                                <Vote dispatch={dispatch} objeto={post} typeObject={'post'} />
                            </Row>
                            <hr />
                            <NewComment post_id={post.id} />
                            <hr />
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
