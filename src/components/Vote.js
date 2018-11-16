import React, { Component } from 'react'
import { Col, Button, Glyphicon, ButtonToolbar } from 'react-bootstrap';
import { handleToggleVotePost } from '../actions/post'
import { handleToggleVoteComment } from '../actions/comment'

class Vote extends Component {

    handleVote= (e, objeto, typeObject, typeVote) => {
        e.preventDefault()
        const { dispatch } = this.props

        if(typeObject === 'post'){ 
            dispatch(handleToggleVotePost({
                id: objeto.id,
                voto: typeVote,
                voteScore: (typeVote  === 'upVote') ? objeto.voteScore + 1 : objeto.voteScore - 1 
            })) 
        } else{
            dispatch(handleToggleVoteComment({
                id: objeto.id,
                voto: typeVote,
                voteScore: (typeVote  === 'upVote') ? objeto.voteScore + 1 : objeto.voteScore - 1 
            })) 
        }

    }

    render() {
        const { objeto, typeObject } = this.props
        return (
            <Col md={5}>
            <ButtonToolbar>
                <Button bsSize="small" onClick={(e) => this.handleVote(e, objeto, typeObject, 'upVote')}>
                    <Glyphicon glyph="thumbs-up" />
                </Button>
                <Button bsSize="small" onClick={(e) => this.handleVote(e, objeto,  typeObject, 'downVote')}>
                    <Glyphicon glyph="thumbs-down" />
                </Button>
                </ButtonToolbar>
            </Col>
        )
    }
}
export default Vote;
