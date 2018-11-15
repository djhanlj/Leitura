import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';

class NewPost extends Component {

    state = {
        text: '',
        toHome: false,
    }


    render() {
        const { text, toHome } = this.state
        const { categories } = this.props

        return (
            <Grid className="body">
                <Row className="show-grid">
                    <Col lg={10} md={9}>
                        <h1>Criar Post </h1>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col lg={8} md={10}>
                        <form >
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Select</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    {categories.map((categorie, index) => (
                                        <option key={index} value={categorie.name}>{categorie.name}</option>
                                    ))}
                                </FormControl>
                            </FormGroup>

                            <FieldGroup
                                id="formControlsText"
                                type="text"
                                label="Autor"
                                placeholder="Enter text"
                            />

                            <FieldGroup
                                id="formControlsText"
                                type="text"
                                label="Titulo"
                                placeholder="Enter text"
                            />

                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Digita Post</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="textarea" />
                            </FormGroup>

                            <Button type="submit">Submit</Button>

                        </form>

                    </Col>
                </Row>
            </Grid>
        )
    }
}

function mapStateToProps({ categories }) {
    return {
        categories
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


export default withRouter(connect(mapStateToProps)(NewPost));
