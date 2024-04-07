import React from 'react';
import { Row, Col } from 'react-bootstrap';
import demex from '../assets/demex.svg';
import brg from '../assets/brg.svg';
import oportun from '../assets/oportun.svg';

const PastBlock = () => {
  return (
    <Row className="past-block">
      <span className="past-header">It has been a journey</span>
      <div className="past-img-container">
        <img className="past-img" src={demex}></img>
        <img className="past-img" src={oportun}></img>
        <img className="past-img" src={brg}></img>
      </div>
    </Row>
  );
};

export default PastBlock;
