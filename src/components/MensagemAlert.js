import React, { Fragment } from 'react'
import { Row, Alert, Col } from 'react-bootstrap';

const MensagemAlert = ({ showAlert, textMensagem, typeAlert = 'success' }) => {
    return (
        <Fragment>
            {showAlert &&
                <Row className="show-grid">
                    <Col lg={8} md={10}>
                        <Alert bsStyle={typeAlert}>
                            <h4>Ops, tem algo errado!</h4>
                            <p>{textMensagem} </p>
                        </Alert>
                    </Col>
                </Row>
            }
        </Fragment>

    )
}
export default MensagemAlert;