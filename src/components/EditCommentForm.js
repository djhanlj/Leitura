import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ButtonToolbar, Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

class EditCommentForm extends Component {
    state = {
        body: '',
    }

    componentDidMount() {
        const { comment } = this.props
        if (comment)
            this.setState({ body: comment.body });
    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState({ [propertyName]: event.target.value });
    }


    render() {
        const { body } = this.state
        const { doNotEdit, editFormSubmit, comment } = this.props

        return (
            <Row className="show-grid">
                <Col lg={8} md={10}>
                    <form>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Comentário</ControlLabel>
                            <FormControl
                                value={body}
                                onChange={this.handleChangeFor('body')}
                                componentClass="textarea"
                                placeholder="Comentário" />
                        </FormGroup>
                        <ButtonToolbar>
                            <Button type="submit" onClick={(e) => editFormSubmit(e, body, comment.id)}>Editar</Button>
                            <Button type="submit" onClick={doNotEdit}>Cancelar</Button>
                        </ButtonToolbar>
                    </form>
                </Col>
            </Row>
        )
    }
}


function mapStateToProps({ comments }, { comment_id, doNotEdit, editFormSubmit }) {
    const comment = comments.find(comment => comment.id === comment_id)
    return {
        comment,
        doNotEdit,
        editFormSubmit
    }
}


export default connect(mapStateToProps)(EditCommentForm);
