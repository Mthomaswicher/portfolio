import React from 'react';
import Card from 'react-bootstrap/Card';
import oportunpreview from '../assets/oportunpreview.png';

const ProjectPreview = (props) => {
  return (
    <Card className="card-container">
      <Card.Img className="card-image" variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectPreview;
