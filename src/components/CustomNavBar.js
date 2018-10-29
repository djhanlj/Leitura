import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

import {Navbar, Nav,NavItem} from 'react-bootstrap';

class CustomNavBar extends Component {
  render() {
    return (
    <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Leitura</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} componentClass={Link} href="/" to="/">
        Home
      </NavItem>
      <NavItem eventKey={2} componentClass={Link} href="/categories" to="/categories">
        Link 2
      </NavItem>
    </Nav>
  </Navbar>
    )
  }
}

export default CustomNavBar;
