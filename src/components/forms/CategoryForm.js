import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { handleAddCategory } from '../../actions/category'
import MensagemAlert from './MensagemAlert'
import FieldGroup from './FieldGroup'

class CategoryForm extends Component {

    state = {
        name: '',
        showAlert: false,
    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState({ [propertyName]: event.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        const { name } = this.state
        const { addCategory } = this.props
        
        if (name === '') {
            this.setState({ showAlert: true });
            return false;
        }

        addCategory(name)
        this.setState(() => ({
            name: '',
            showAlert: false,
        }))
    };

    render() {
        const { name, showAlert } = this.state

        return (
            <Grid className="body">
                <MensagemAlert
                    showAlert={showAlert}
                    textMensagem="Todos os campos do formulário de comentários devem ser preenchidos!"
                    typeAlert='danger' />

                <Row className="show-grid">
                    <Col lg={10} md={9}>
                        <h1>Nova Categoria</h1>
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col lg={8} md={10}>
                        <form onSubmit={this.handleSubmit}>
                            <FieldGroup
                                value={name}
                                onChange={this.handleChangeFor('name')}
                                type="text"
                                label="Categoria"
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
        addCategory: (name) => dispatch(handleAddCategory(name)),
    }
}

export default connect(null, mapDispatchToProps)(CategoryForm);
