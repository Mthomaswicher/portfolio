import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown, Offcanvas } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import matt from '../assets/matt.svg';
import burger from '../assets/menu.svg';

const PortfolioContainer = (props) => {
  return (
    <>
      <Container className="nav-container" fluid>
        <Navbar sticky="top" collapseOnSelect expand="small">
          <Container fluid>
            <Navbar.Brand>
              <img
                src={matt}
                className="d-inline-block align-center"
                alt="React Bootstrap logo"
                height={16}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
              <img src={burger}></img>
            </Navbar.Toggle>
            {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
            <Navbar.Offcanvas
              placement="end"
              id={'offcanvasNavbar-expand-sm'}
              aria-labelledby={'offcanvasNavbarLabel-expand-sm'}>
              <Offcanvas.Body>
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Web3 Powered Remittances</Nav.Link>
                  <Nav.Link href="#pricing">AI Personal Finance</Nav.Link>
                </Nav>
              </Offcanvas.Body>
              {/* </Navbar.Collapse> */}
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        {props.content}
      </Container>
      <div></div>
    </>
  );
};

export default PortfolioContainer;
