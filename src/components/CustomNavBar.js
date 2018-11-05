import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Navbar, Nav,NavItem } from 'react-bootstrap';

class CustomNavBar extends Component {
  render() {
    const { categories } = this.props
    return (
    <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        Leitura
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} componentClass={Link} href="/" to="/">
        Home
      </NavItem>
      {categories.map( (categoria, index) => (
         <NavItem key={index} componentClass={Link} href={categoria.path} to={categoria.path}>
         { categoria.name }
       </NavItem>
      ))}
      
    </Nav>
  </Navbar>
    )
  }
}

export default CustomNavBar;
