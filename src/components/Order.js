import React, { Component } from 'react'
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { handleOrderBy } from '../actions/post'

class Order extends Component {

    orderBy = (e, typeOrder) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(handleOrderBy(typeOrder))

    }

    render() {
        // const { objeto, typeObject } = this.props
        return (
            <Row className="show-grid">
                <Col md={1}>
                    Votos
                </Col>
                <Col md={5}>
                    <ButtonGroup>
                        <Button onClick={(e) => this.orderBy(e, "asc")} checked={true} >
                            ASC
                        </Button>
                        <Button onClick={(e) => this.orderBy(e, "desc")}>
                            DESC
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
        )
    }
}
export default Order;
