import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../assets/animation.json';
import { Row, Col } from 'react-bootstrap';

const HomeHero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Row className="hero-row">
      <Col md={9} className="hero-text-container" lg={5}>
        <span className="hero-header">
          Hi, I am <span className="colortext">Matt</span> 👋🏽
        </span>
        <br></br>
        <span className="hero-subtext">
          I am currently a Product Designer at Berkeley Research Group where I
          am helping transform the health tech industry through the creation of
          delightful, human designs. Previously, I worked at Oportun, where I
          played an integral role in the rebranding and unification of Oportun
          and Digit after going through an acquisition. There, I helped extend
          access to financial inclusivity with the use of Web3 and AI.
        </span>
      </Col>
      <Col md={'auto'} lg={7}>
        <Lottie options={defaultOptions} />
      </Col>
    </Row>
  );
};

export default HomeHero;
