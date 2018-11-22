import React from 'react'
import { Jumbotron, Grid, Row } from 'react-bootstrap';

const NotFoundPage = () => {
    return (
        <Grid className="body">
            <Row className="show-grid">
                <Jumbotron>
                    <h2>Ops, Post não encontrado!</h2>
                    <p>O post pode ter sido deletado</p>
                </Jumbotron>
            </Row>
        </Grid>
    )
}
export default NotFoundPage;