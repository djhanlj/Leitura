import React, { Component } from 'react'
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { handleOrderBy } from '../actions/post'

class Order extends Component {

    state = {
        selectedOrder: 'asc'
    }
    orderBy = (e, typeOrder) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(handleOrderBy(typeOrder))
        this.setState({
            selectedOrder: typeOrder

        })
    }

    render() {
        const { selectedOrder } = this.state

        return (
            <Row className="show-grid">
                <Col md={1}>
                    Votos
                </Col>
                <Col md={5}>
                    <ButtonGroup>
                        <Button bsStyle={selectedOrder === 'asc' ? "info" : null} onClick={(e) => this.orderBy(e, "asc")} checked={true} >
                            ASC
                        </Button>
                        <Button bsStyle={selectedOrder === 'desc' ? "info" : null} onClick={(e) => this.orderBy(e, "desc")}>
                            DESC
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
        )
    }
}
export default Order;
