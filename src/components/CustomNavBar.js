import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import {Navbar, Nav,NavItem} from 'react-bootstrap';

class CustomNavBar extends Component {
  render() {
    const { categories } = this.props
   
    return (
    <Navbar>
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
         <NavItem ley={index} componentClass={Link} href={categoria.path} to={categoria.path}>
         { categoria.name }
       </NavItem>
      ))}
      
    </Nav>
  </Navbar>
    )
  }
}

export default CustomNavBar;
