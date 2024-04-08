import React from 'react';
import { Row, Col } from 'react-bootstrap';
import demex from '../assets/demex.svg';
import brg from '../assets/brg.svg';
import oportun from '../assets/oportun.svg';
import 'animate.css';

const PastBlock = () => {
  return (
    <Row className="past-block">
      <span className="past-header">It has been a journey</span>
      <div className="past-img-container">
        <Col className="img-holder" md={12} lg={'auto'}>
          <img
            className="past-img animate__animated animate__bounce"
            src={demex}></img>
        </Col>
        <Col className="img-holder" md={12} lg={'auto'}>
          {' '}
          <img
            className="past-img animate__animated animate__bounce"
            src={oportun}></img>
        </Col>
        <Col className="img-holder" md={12} lg={'auto'}>
          <img
            className="past-img animate__animated animate__bounce"
            src={brg}></img>
        </Col>
      </div>
    </Row>
  );
};

export default PastBlock;
