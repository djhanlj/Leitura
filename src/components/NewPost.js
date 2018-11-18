import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';
import { handleAddPost, handleEditPost } from '../actions/post'


class NewPost extends Component {

    state = {
        title: '',
        body: '',
        author: '',
        category: '',
        desabilitado: false
    }

    componentDidMount() {
        const { post } = this.props
        if (post)
            this.setState({
                title: post.title,
                body: post.body,
                author: post.author,
                category: post.category,
                desabilitado: true,
            });
    }

    componentDidUpdate(prevProps) {
        const { post, posts, post_id } = this.props
        if ( post_id && posts.length > prevProps.posts.length) {
            this.setState({
                title: post.title,
                body: post.body,
                author: post.author,
                category: post.category,
                desabilitado: true,
            });
        }
            
    }
 
    handleChangeFor = (propertyName) => (event) => {
        this.setState({ [propertyName]: event.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { category, author, body, title } = this.state
        const { dispatch } = this.props
        const { post_id } = this.props.match.params

        if (!post_id) {
            dispatch(handleAddPost(category, author, body, title))
            this.props.history.push(`/${category}`)
        } else {
            dispatch(handleEditPost(post_id, body, title))
            this.props.history.push(`/post/${post_id}`)
        }
    }

    render() {
        const { category, author, body, title, desabilitado } = this.state
        const { categories } = this.props

        return (
            <Grid className="body">
                <Row className="show-grid">
                    <Col lg={10} md={9}>
                        {!desabilitado ? <h1>Criar Post </h1> : <h1>Editar Post</h1>}
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

                            <Button type="submit">Submit</Button>
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
