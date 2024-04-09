import React from 'react';
import demex from '../assets/demex.mp4';
import { Card } from 'react-bootstrap';

const VideoProject = (props) => {
  return (
    <>
      <Card className="card-container">
        <video autoPlay muted loop id="myVideo">
          <source src={demex} type="video/mp4" />
        </video>
        <Card.Body className="video-card">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default VideoProject;
