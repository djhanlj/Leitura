import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Badge, Button, ButtonToolbar, Glyphicon } from 'react-bootstrap'
import { formatDate } from '../utils/helpers'
import Vote from './Vote'
import { handleRemoveComment, handleEditComment, handleComments } from '../actions/comment'
import EditCommentForm from './EditCommentForm'

class Comment extends Component {

    state = {
        commentIdEdit: ''
    }

    componentDidMount() {
        const { getAllComment, post_id } = this.props
        getAllComment(post_id)
    }

    removeComment = (e, id) => {
        e.preventDefault()
        const { removeComment, post_id } = this.props
        removeComment(id, post_id)
    };

    editFormComment = (e, commentIdEdit) => {
        e.preventDefault()
        this.setState({ commentIdEdit })
    };

    /**
     * @description Desabilita form de edição de comentário
     * 
     */
    doNotEdit = (e) => {
        e.preventDefault()
        this.setState({ commentIdEdit: '' })
    };

    editFormSubmit = (e, body, id) => {
        e.preventDefault()
        const { editComment } = this.props
        editComment(id, body)
        this.setState({ commentIdEdit: '' })
    };

    render() {
        const { commentIdEdit } = this.state
        const { comments, post_id } = this.props
        return (
            <Col md={12}>
                <h4>Comentários ({comments.length}) </h4>
                <br />
                {comments.map((comment) => (
                    comment.id === commentIdEdit
                        ? <EditCommentForm key={comment.id} post_id={post_id}
                            comment_id={comment.id} doNotEdit={this.doNotEdit} editFormSubmit={this.editFormSubmit} />

                        : <Fragment key={comment.id}>
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
                                                <Button bsSize="small" title="Editar" onClick={(e) => this.editFormComment(e, comment.id)} >
                                                    Editar <Glyphicon glyph="edit" />
                                                </Button>
                                                <Button bsSize="small" title="Remover" onClick={(e) => this.removeComment(e, comment.id)} >
                                                    Remover <Glyphicon glyph="remove" />
                                                </Button>
                                            </ButtonToolbar>
                                        </Col>
                                    </Row>
                                    {comment.body}
                                    <Row className="show-grid">
                                        <Col md={2}>
                                            <p className="post-meta">Votos <Badge>{comment.voteScore}</Badge></p>
                                        </Col>
                                        <Vote objeto={comment} typeObject={'comment'} />
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

function mapDispatchToProps(dispatch) {
    return {
        getAllComment: (post_id) => dispatch(handleComments(post_id)),
        removeComment: (id, post_id) => dispatch(handleRemoveComment(id, post_id)),
        editComment: (comment_id, body) => dispatch(handleEditComment(comment_id, body)),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Comment);

