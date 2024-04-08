import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import matt from '../assets/matt.svg';

const PortfolioContainer = (props) => {
  return (
    <Container fluid>
      <Navbar collapseOnSelect expand="small">
        <Container>
          <Navbar.Brand>
            <img
              src={matt}
              className="d-inline-block align-center"
              alt="React Bootstrap logo"
              height={16}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Web3 Powered Remittances</Nav.Link>
              <Nav.Link href="#pricing">AI Personal Finance</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {props.content}
    </Container>
  );
};

export default PortfolioContainer;
