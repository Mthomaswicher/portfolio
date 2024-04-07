import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import matt from '../assets/matt.svg';
import PropTypes from 'prop-types';

const PortfolioContainer = (props) => {
  return (
    <Container fluid>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <img
              src={matt}
              className="d-inline-block align-center"
              alt="React Bootstrap logo"
              height={16}
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Web3 Powered Remittances</Nav.Link>
            <Nav.Link href="#pricing">AI Personal Finance</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {props.content}
    </Container>
  );
};

export default PortfolioContainer;
