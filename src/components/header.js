// Header contains navigation and appears on every page
import React from 'react';
import Navigator from './navigation';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { NavDropdown } from 'react-bootstrap';


function Header() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Whitney Kropat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  );
}


export default Header;