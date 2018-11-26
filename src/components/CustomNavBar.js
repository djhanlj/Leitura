import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { toUpperCaseText } from '../utils/helpers'

class CustomNavBar extends Component {
  render() {
    const { categories } = this.props
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            Leitura
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} componentClass={Link} href="/" to="/">
            Home
          </NavItem>
          {categories.map((categoria) => (
            <NavItem key={categoria.name} componentClass={Link} href={`/${categoria.path}`} to={`/${categoria.path}`}>
              {toUpperCaseText(categoria.name)}
            </NavItem>
          ))}
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default CustomNavBar;
