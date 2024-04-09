import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../assets/wave.json';
import { Row, Col } from 'react-bootstrap';
import { annotate } from 'https://unpkg.com/rough-notation?module';

const HomeHero = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  useEffect(() => {
    const e = document.querySelector('span');
    const annotation = annotate(e, { type: 'underline' });
    annotation.show();
  }, []);

  return (
    <Row className="hero-row">
      <Col className="hero-text-container" lg={5}>
        <span className="hero-header">
          Hi, I am <span id="colortext">Matt</span> 👋🏽
        </span>
        <br></br>
        <span className="hero-subtext">
          I am an Experienced Product Designer passionate about crafting
          memorable user experiences and driving results through innovative
          design solutions. With a track record of leading teams and pushing
          creative boundaries, I thrive on transforming complex ideas into
          impactful products.
          <br></br>
          <br></br>I am currently a Product Designer at Berkeley Research Group
          where I am helping transform the health tech industry through the
          creation of delightful, human designs. Previously, I worked at
          Oportun, where I played an integral role in the rebranding and
          unification of Oportun and Digit after going through an acquisition.
          There, I helped extend access to financial inclusivity with the use of
          Web3 and AI.
        </span>
      </Col>
      <Col lg={7}>
        <Lottie options={defaultOptions} />
      </Col>
    </Row>
  );
};

export default HomeHero;
