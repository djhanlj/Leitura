import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Badge } from 'react-bootstrap';
import { handleComments } from '../actions/comment'
import { formatDate } from '../utils/helpers'
import Vote from './Vote'

class Comment extends Component {

    componentDidMount() {
        const { dispatch, post_id } = this.props
        dispatch(handleComments(post_id))
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
                                <h4 className="media-heading">
                                    {comment.author}
                                    <small> {formatDate(comment.timestamp)} </small>
                                </h4>
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

