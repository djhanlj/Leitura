import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Badge, Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { handleComments } from '../actions/comment'
import { formatDate } from '../utils/helpers'
import Vote from './Vote'
import { handleRemoveComment } from '../actions/comment'

class Comment extends Component {

    componentDidMount() {
        const { dispatch, post_id } = this.props
        dispatch(handleComments(post_id))
    }
    removeComment = (e, id) => {
        e.preventDefault()

        const { dispatch, post_id } = this.props
        dispatch(handleRemoveComment(id, post_id))
    }



    render() {
        const { comments, dispatch } = this.props
        return (
            <Col md={12}>
                <h4>Comentários ({comments.length}) </h4>
                <br />
                {comments.map((comment) => (
                    <Fragment key={comment.id}>
                        <div className="media" key={comment.id}>
                            <div className="media-body">
                                <Row className="show-grid">
                                    <Col md={8}>
                                        <h4 className="media-heading">
                                            {comment.author}
                                            <small> {formatDate(comment.timestamp)} </small>
                                        </h4>
                                    </Col>
                                    <Col md={4}>
                                        <ButtonToolbar>
                                            <Button bsSize="small" title="Remover" onClick={(e) => this.removeComment(e, comment.id)} >
                                                <Glyphicon glyph="remove" />
                                            </Button>
                                        </ButtonToolbar>
                                    </Col>
                                </Row>
                                {comment.body}
                                <Row className="show-grid">
                                    <Col md={2}>
                                        <p className="post-meta">Votos <Badge>{comment.voteScore}</Badge></p>
                                    </Col>
                                    <Vote dispatch={dispatch} objeto={comment} typeObject={'comment'} />
                                </Row>

                            </div>
                        </div>
                        <hr />
                    </Fragment>
                ))}
            </Col>
        )
    }
}

function mapStateToProps({ comments }, { post_id }) {
    return {
        comments,
        post_id,
    }
}

export default connect(mapStateToProps)(Comment);

