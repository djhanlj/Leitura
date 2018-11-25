import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button, ButtonGroup, FormControl, Panel , Glyphicon} from 'react-bootstrap'
import { handleOrderBy } from '../actions/post'

class Order extends Component {

    /**
     * vote, date
     */
    state = {
        selectedOrder: 'asc',
        selectedTypeOrder: 'vote'
    }

    setOrderBy = (e, selectedTypeOrder, selectedOrder) => {
         e.preventDefault()
        const { orderBy } = this.props
        
        orderBy({selectedOrder, selectedTypeOrder})
        
        this.setState({
            selectedOrder,
            selectedTypeOrder
        })

    }

    handleChangeFor = (e) => {
        e.preventDefault()
        const { selectedOrder } = this.state
        const selectedTypeOrder = e.target.value
        this.setOrderBy(e, selectedTypeOrder, selectedOrder)
    }

    handleClickButton  = (e, selectedOrder) => {
        e.preventDefault()
        const {  selectedTypeOrder } = this.state
        this.setOrderBy(e, selectedTypeOrder, selectedOrder)
    }


    render() {

        const typFilters = [
            { value: 'vote', label: 'Vote' },
            { value: 'date', label: 'Date' },
        ];
        const { selectedOrder, selectedTypeOrder } = this.state
       

        return (
            <Panel>
                <Panel.Body>
                <Row className="show-grid">
                    <Col md={12}>
                        <h4>Ordernar <span className="label label-default"> <Glyphicon glyph="sort-by-alphabet" /></span></h4>
                    </Col>
                    <Col md={6}>
                        <FormControl componentClass="select" placeholder="select"
                        value={selectedTypeOrder}
                        onChange={this.handleChangeFor}>
                        {typFilters.map((typFilter, index) => (
                                        <option key={index} value={typFilter.value}>{typFilter.label}</option>
                                    ))}
                        </FormControl>
                    </Col>
                    <Col md={4}>
                        <ButtonGroup bsSize="small">
                            <Button bsStyle={selectedOrder === 'asc' ? "info" : null} onClick={(e) => this.handleClickButton(e,"asc")} checked={true} >
                                ASC
                        </Button>
                            <Button bsStyle={selectedOrder === 'desc' ? "info" : null} onClick={(e) => this.handleClickButton(e, "desc")}>
                                DESC
                        </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                </Panel.Body>
            </Panel>
            
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        orderBy: (typeOrder) => dispatch(handleOrderBy(typeOrder)),
    }
}
export default connect(null, mapDispatchToProps)(Order);
