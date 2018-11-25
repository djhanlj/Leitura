import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import { handleAddComment } from '../actions/comment'
import MensagemAlert from './MensagemAlert'
import FieldGroup from './FieldGroup'

class CommentForm extends Component {
    state = {
        body: '',
        author: '',
        showAlert: false,
    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState({ [propertyName]: event.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { author, body } = this.state
        const { addComment, post_id } = this.props

        if (author === '' || body === '') {
            this.setState({ showAlert: true });
            return false;
        }

        addComment(author, body, post_id)

        this.setState(() => ({
            body: '',
            author: '',
            showAlert: false,
        }))
    }
    render() {
        const { author, body, showAlert } = this.state

        return (
            <Grid className="body">
                <MensagemAlert
                    showAlert={showAlert}
                    textMensagem="Todos os campos do formulário de comentários devem ser preenchidos!"
                    typeAlert='danger' />

                <Row className="show-grid">
                    <h4>Novo Comentário:</h4>
                    <Col lg={8} md={10}>
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Comentário</ControlLabel>
                                <FormControl
                                    value={body}
                                    onChange={this.handleChangeFor('body')}
                                    componentClass="textarea"
                                    placeholder="Comentário" />
                            </FormGroup>

                            <FieldGroup
                                id="formControlsText"
                                value={author}
                                onChange={this.handleChangeFor('author')}
                                type="text"
                                label="Autor"
                                placeholder="Autor"
                            />
                            <Button type="submit">Salvar</Button>
                        </form>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addComment: (author, body, post_id) => dispatch(handleAddComment(author, body, post_id)),
    }
}

export default connect(null, mapDispatchToProps)(CommentForm);
