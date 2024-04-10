import React, { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import matthew from '../assets/matthew.png';
import Lottie from 'react-lottie';
import * as animationData from '../assets/why.json';

console.log(process.env.REACT_APP_API_KEY);

const Chatbot = () => {
  const prompt = 'What is the capital of France?';
  const endpoint = 'https://api.openai.com/v1/chat/completions';

  const apiKey = process.env.REACT_APP_API_KEY;

  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const resume =
    'Summary: Experienced Senior Product Designer passionate about crafting memorable user experiences and driving results through innovative design solutions. With a track record of leading teams and pushing creative boundaries, I thrive on transforming complex ideas into impactful products. I am currently a Product Designer at Berkeley Research Group where I am helping transform the health tech industry through the creation of delightful, human designs.';

  const generate = () => {
    setLoading(true);
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        max_tokens: 100,
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'Help me convince a prospective employer to hire me',
          },
          {
            role: 'user',
            content: resume,
          },
          {
            role: 'user',
            content: 'Why would you hire Matthew Thomas-Wicher?',
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => setMessage(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    setLoading(false);
  }, [message]);

  return (
    <Row className="past-block">
      <h1 className="past-header">
        Why should you hire Matthew Thomas-Wicher?
      </h1>
      <Col lg={4}>
        <img className="me" src={matthew} />
      </Col>
      <Col className="why-img-holder" lg={8}>
        <Row>
          {Object.keys(message).length < 1 && (
            <Lottie className="why-img" options={defaultOptions} />
          )}
          {message?.choices?.length > 0 && (
            <div className="talk-bubble tri-right border round btm-left-in">
              <div className="talktext">
                {message?.choices?.length > 0 && (
                  <span className="chat-text">
                    {message?.choices[0]?.message?.content}
                  </span>
                )}
              </div>
            </div>
          )}
        </Row>
        <Button onClick={generate} variant="primary">
          Find out why
          {loading && (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </>
          )}
        </Button>
      </Col>
    </Row>
  );
};

export default Chatbot;
