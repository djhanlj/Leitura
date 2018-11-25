import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import { handleOrderBy } from '../actions/post'

class Order extends Component {

    state = {
        selectedOrder: 'asc'
    }

    setOrderBy = (e, typeOrder) => {
        e.preventDefault()
        
        const { orderBy } = this.props
        orderBy(typeOrder)

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
                        <Button bsStyle={selectedOrder === 'asc' ? "info" : null} onClick={(e) => this.setOrderBy(e, "asc")} checked={true} >
                            ASC
                        </Button>
                        <Button bsStyle={selectedOrder === 'desc' ? "info" : null} onClick={(e) => this.setOrderBy(e, "desc")}>
                            DESC
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        orderBy: (typeOrder) => dispatch(handleOrderBy(typeOrder)),
    }
}
export default connect(null, mapDispatchToProps)(Order);
