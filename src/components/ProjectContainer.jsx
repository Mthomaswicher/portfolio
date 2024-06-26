import React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import ProjectPreview from './ProjectPreview';
import oportunpreview from '../assets/oportunpreview.png';
import magnet from '../assets/magnet.png';
import Col from 'react-bootstrap/Col';
import animationData from '../assets/ux.json';
import Lottie from 'react-lottie';
import VideoProject from './VideoProject';

const ProjectContainer = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <h1 className="section-header">My Recent Projects</h1>
      <div className="absolute-animation"></div>
      <Row className="project-container-row">
        <Row>
          <Col md={12} lg={6}>
            <ProjectPreview
              image={oportunpreview}
              title={'Web3 Powered Remittances'}
              text="Filling the gaps and solving pain-points for current remittance solutions"
            />
          </Col>
          <Col md={12} lg={6}>
            <ProjectPreview
              image={oportunpreview}
              title={'Web3 Powered Remittances'}
              text="Filling the gaps and solving pain-points for current remittance solutions"
            />
          </Col>
          <Col lg={12}>
            <VideoProject
              title="The Demex Climate Center"
              text="Helping businesses, large and small, save money from weather-related events."
            />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default ProjectContainer;
