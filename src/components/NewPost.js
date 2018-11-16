import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';
import { handleAddPost } from '../actions/post'


class NewPost extends Component {

    state = {
        title: '',
        body: '',
        author: '',
        category: '',
    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState({ [propertyName]: event.target.value });
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const { category, author, body, title } = this.state
        const { dispatch } = this.props
        dispatch(handleAddPost(category, author, body, title))
        console.log(this.state)
    }


    render() {
        const { category, author, body, title } = this.state
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
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Categorias</ControlLabel>
                                <FormControl componentClass="select" placeholder="select" value={category} onChange={this.handleChangeFor('category')} >
                                    {categories.map((categorie, index) => (
                                        <option key={index} value={categorie.name}>{categorie.name}</option>
                                    ))}
                                </FormControl>
                            </FormGroup>

                            <FieldGroup
                                id="formControlsText"
                                value={author}
                                onChange={this.handleChangeFor('author')}
                                type="text"
                                label="Autor"
                                placeholder="Enter text"
                            />

                            <FieldGroup
                                id="formControlsText"
                                value={title}
                                onChange={this.handleChangeFor('title')}
                                type="text"
                                label="Titulo"
                                placeholder="Enter text"
                            />

                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Digita Post</ControlLabel>
                                <FormControl
                                    value={body}
                                    onChange={this.handleChangeFor('body')}
                                    componentClass="textarea"
                                    placeholder="textarea" />
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
