import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import { handleAddPost, handleEditPost } from '../../actions/post'
import MensagemAlert from './MensagemAlert'
import FieldGroup from './FieldGroup'

class PostForm extends Component {

    state = {
        title: '',
        body: '',
        author: '',
        category: '',
        desabilitado: false,
        showAlert: false,
    }

    updateState = post => {
        this.setState({
            title: post.title,
            body: post.body,
            author: post.author,
            category: post.category,
            desabilitado: true,
        });
    };

    componentDidMount() {
        const { post } = this.props
        if (post)
            this.updateState(post)
    }

    componentDidUpdate(prevProps) {
        const { post, posts, post_id } = this.props
        if (post_id && posts.length > prevProps.posts.length)
            this.updateState(post)

    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState({ [propertyName]: event.target.value });
    };

    /**
     * @description Método utilizado para add ou edit um post
     */
    handleSubmit = (e) => {
        e.preventDefault()
        const { category, author, body, title } = this.state
        const { addPost, editPost } = this.props
        const { post_id } = this.props.match.params

        if (author === '' || body === '' || title === '') {
            this.setState({ showAlert: true });
            return false;
        }
        if (!post_id) {
            addPost(category, author, body, title)
            this.props.history.push(`/${category}`)
        } else {
            editPost(post_id, body, title)
            this.props.history.push(`/post/${post_id}`)
        }

        this.setState({ showAlert: false });
    };

    render() {
        const { category, author, body, title, desabilitado, showAlert } = this.state
        const { categories } = this.props

        return (
            <Grid className="body">
                <MensagemAlert
                    showAlert={showAlert}
                    textMensagem="Todos os campos devem ser preenchidos!"
                    typeAlert='danger' />

                <Row className="show-grid">
                    <Col lg={10} md={9}>
                        {!desabilitado ? <h1>Novo Post </h1> : <h1>Editar Post</h1>}
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col lg={8} md={10}>
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Categorias</ControlLabel>
                                <FormControl componentClass="select" placeholder="select"
                                    value={category}
                                    onChange={this.handleChangeFor('category')}
                                    disabled={desabilitado} >
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
                                disabled={desabilitado}
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

                            <Button type="submit">Salvar</Button>
                        </form>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

function mapStateToProps({ posts, categories }, { match }) {
    const { post_id } = match.params
    const post = posts.find(post => post.id === post_id)
    return {
        categories,
        posts,
        post,
        post_id,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPost: (category, author, body, title) => dispatch(handleAddPost(category, author, body, title)),
        editPost: (post_id, body, title) => dispatch(handleEditPost(post_id, body, title)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));
