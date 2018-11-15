import React, { Component } from 'react'
import { Col } from 'react-bootstrap';

class Comment extends Component {

    /*componentDidMount(){
        this.props.dispatch(handleInitialData())
      }*/
    

    render() {
        return (
            <Col md={12}>
                <div className="media">
                        <div className="media-body">
                            <h4 className="media-heading">Start Bootstrap
                                <small>August 25, 2014 at 9:30 PM</small>
                            </h4>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. 
                            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                             Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        
                        </div>
                    </div>
            </Col>
        )
    }
}
export default Comment;
