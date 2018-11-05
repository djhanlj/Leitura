import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap';

export default class Posts extends Component {
  render() {
    console.log(this.props.match.params.category)
    return (
      <Grid className="body">
        <Row className="show-grid">
        <Col md={8}>
            <h1>Blog Post Title</h1>
            <p className="lead">
                by <a href="#">Start Bootstrap</a>
            </p>
            <hr/>
            <p><span className="glyphicon glyphicon-time"></span> Posted on August 24, 2013 at 9:00 PM</p>
            <hr/>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>
            <hr/>
            { /** Comments Form */}
            <div className="well">
                <h4>Leave a Comment:</h4>
                <form>
                    <div className="form-group">
                        <textarea class="form-control" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <hr/>
            { /** Comment */}

            <div className="media">
                <a className="pull-left" href="#">
                    <img className="media-object" src="http://placehold.it/64x64" alt="" />
                </a>
                <div className="media-body">
                    <h4 className="media-heading">Start Bootstrap
                        <small>August 25, 2014 at 9:30 PM</small>
                    </h4>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
            </div>

            <div className="media">
                    <a className="pull-left" href="#">
                        <img className="media-object" src="http://placehold.it/64x64" alt="" />
                    </a>
                    <div className="media-body">
                        <h4 className="media-heading">Start Bootstrap
                            <small>August 25, 2014 at 9:30 PM</small>
                        </h4>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    
                        <div className="media">
                            <a className="pull-left" href="#" >
                                <img className="media-object" src="http://placehold.it/64x64" alt="" />
                            </a>
                            <div className="media-body">
                                <h4 className="media-heading">Nested Start Bootstrap
                                    <small>August 25, 2014 at 9:30 PM</small>
                                </h4>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                        </div>
                    
                    </div>
                </div>
            </Col>
        </Row>
      </Grid>
    )
  }
}
