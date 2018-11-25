import React, { Component } from 'react'
import { Grid, Row, Col, Button, Panel, FormControl, Glyphicon } from 'react-bootstrap'
import Posts from './Posts'
import { Link } from 'react-router-dom'
import { toUpperCaseText } from '../utils/helpers'
import PostsOrder from './PostsOrder'

class Home extends Component {

  state = {
    query: '',
  }

  updateQuery = (query) => {
    this.setState({ query })
  };

  render() {
    const { category } = this.props.match.params
    const { query } = this.state

    return (
      <Grid className="body">
        <Row className="show-grid">
          <Col lg={10} md={9}>
            <h1>Post {toUpperCaseText(category)} </h1>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col lg={7} md={7}>
            <Posts category={category} query={query} />
          </Col>
          <Col lg={5} md={5}>
            <Panel>
              <Panel.Body>
                <Row >
                  <Col md={12}>
                    <h4><Glyphicon glyph="search" /> Buscar Posts </h4>
                    <FormControl
                      type="text"
                      placeholder="Digite o nome do post"
                      value={query}
                      onChange={(event) => this.updateQuery(event.target.value)} />
                  </Col>
                </Row>
                <br />
                <Row className="show-grid">
                  <PostsOrder />
                </Row>
                <br />
                <Row>
                  <Link to={`/post/create`} >
                    <div className='botao'>
                      <Button bsStyle="primary" block>
                        Novo Post
                       </Button>
                    </div>
                  </Link>
                </Row>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}


export default Home;
