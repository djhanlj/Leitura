import React from 'react'
import { Jumbotron, Grid, Row } from 'react-bootstrap';

const Page404 = () => {
    return (
        <Grid className="body">
            <Row className="show-grid">
                <Jumbotron>
                    <h1>Ola, algo está errado!</h1>
                    <p>Volte para tela inicial e tente novamente.</p>
                </Jumbotron>
            </Row>
        </Grid>
    )
}
export default Page404