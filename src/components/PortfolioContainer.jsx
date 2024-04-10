import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown, Offcanvas } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import matt from '../assets/matt.svg';
import burger from '../assets/menu.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { annotate } from 'https://unpkg.com/rough-notation?module';
import gmail from '../assets/gmail.svg';
import linkedin from '../assets/linkedin.png';
import insta from '../assets/insta.png';
import Chatbot from './Chatbot';

const PortfolioContainer = (props) => {
  useEffect(() => {
    const e = document.querySelector('#underline');
    const annotation = annotate(e, { type: 'underline' });
    annotation.show();
  }, []);
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
        <Row className="footer">
          <Col lg={4}>
            <div id="underline">
              <img
                src={matt}
                className="d-inline-block align-center"
                alt="React Bootstrap logo"
                height={16}
              />
            </div>
          </Col>
          <Col lg={4}>
            <h1 className="hero-header">Lets Connect</h1>
            <div className="social-container">
              <a href="mailto:mthomaswicher@gmail.com">
                <img className="social" src={gmail} />
              </a>
              <a
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/mthomaswicher"
                target="_blank">
                <img className="social" src={linkedin} />
              </a>
              <a
                rel="noreferrer noopener"
                href="https://www.instagram.com/urban_voyager"
                target="_blank">
                <img className="social" src={insta} />
              </a>
            </div>
          </Col>
          <Col lg={4}></Col>
        </Row>
        <Chatbot />
      </Container>
    </>
  );
};

export default PortfolioContainer;
