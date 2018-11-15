import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap';
import { handleComments } from '../actions/comment'
import { formatDate } from '../utils/helpers'

class Comment extends Component {

    componentDidMount() {
        const { dispatch, post_id } = this.props
        dispatch(handleComments(post_id))
    }
    render() {
        const { comments } = this.props
        return (
            <Col md={12}>
                <h4>Comentários ({comments.length}) </h4>
                <br/>
                {comments.map((comment) => (
                    <Fragment key={comment.id}>
                        <div className="media" key={comment.id}>
                            <div className="media-body">
                                <h4 className="media-heading">
                                    {comment.author}
                                    <small> {formatDate(comment.timestamp)} </small>
                                </h4>
                                {comment.body}
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

