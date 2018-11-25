import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Button, Glyphicon, ButtonToolbar } from 'react-bootstrap'
import { handleToggleVotePost } from '../actions/post'
import { handleToggleVoteComment } from '../actions/comment'

class Votes extends Component {

    setVote = (e, objeto, typeObject, typeVote) => {
        e.preventDefault()
        const { setVotePost, setVoteComment } = this.props

        if (typeObject === 'post') {
            setVotePost({
                id: objeto.id,
                voto: typeVote,
                voteScore: (typeVote === 'upVote') ? objeto.voteScore + 1 : objeto.voteScore - 1
            })
        } else {
            setVoteComment({
                id: objeto.id,
                voto: typeVote,
                voteScore: (typeVote === 'upVote') ? objeto.voteScore + 1 : objeto.voteScore - 1
            })
        }
    };

    render() {
        const { objeto, typeObject } = this.props
        return (
            <Col md={5}>
                <ButtonToolbar>
                    <Button bsSize="small" onClick={(e) => this.setVote(e, objeto, typeObject, 'upVote')}>
                        <Glyphicon glyph="thumbs-up" />
                    </Button>
                    <Button bsSize="small" onClick={(e) => this.setVote(e, objeto, typeObject, 'downVote')}>
                        <Glyphicon glyph="thumbs-down" />
                    </Button>
                </ButtonToolbar>
            </Col>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setVotePost: ({ id, voto, voteScore }) => dispatch(handleToggleVotePost({ id, voto, voteScore })),
        setVoteComment: ({ id, voto, voteScore }) => dispatch(handleToggleVoteComment({ id, voto, voteScore }))
    }
}

export default connect(null, mapDispatchToProps)(Votes);
