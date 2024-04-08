import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import matt from '../assets/matt.svg';
import PropTypes from 'prop-types';

const PortfolioContainer = (props) => {
  return (
    <Container fluid>
      <Navbar>
        <Container fluid>
          <Navbar.Brand>
            <img
              src={matt}
              className="d-inline-block align-center"
              alt="React Bootstrap logo"
              height={16}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Web3 Powered Remittances</Nav.Link>
              <Nav.Link href="#pricing">AI Personal Finance</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {props.content}
    </Container>
  );
};

export default PortfolioContainer;
