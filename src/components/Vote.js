import React, { Component } from 'react'
import { Col, Button, Glyphicon } from 'react-bootstrap';
import { handleToggleVote } from '../actions/post'

class Vote extends Component {

    handleVote= (e, post, typeVote) => {
        e.preventDefault()
        const { dispatch } = this.props

        dispatch(handleToggleVote({
            id: post.id,
            voto: typeVote,
            voteScore: (typeVote  === 'upVote') ? post.voteScore + 1 : post.voteScore - 1 
        }))
    }

    render() {
        const { post } = this.props
        return (
            <Col md={5}>
                <Button bsSize="small" onClick={(e) => this.handleVote(e, post, 'upVote')}>
                    <Glyphicon glyph="thumbs-up" /> Star
                </Button>
                <Button bsSize="small" onClick={(e) => this.handleVote(e, post, 'downVote')}>
                    <Glyphicon glyph="thumbs-down" /> Star
                </Button>
            </Col>
        )
    }
}
export default Vote;
