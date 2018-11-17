import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';
import { handleAddComment } from '../actions/comment'


class NewComment extends Component {

    state = {
        body: '',
        author: '',
    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState({ [propertyName]: event.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { author, body } = this.state
        const { dispatch, post_id } = this.props
        dispatch(handleAddComment(author, body, post_id))

        this.setState(() => ({
            body: '',
            author: '',
        }))
    }
    render() {
        const { author, body } = this.state

        return (
            <Grid className="body">
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
                            <Button type="submit">Submit</Button>
                        </form>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}


export default connect()(NewComment);
