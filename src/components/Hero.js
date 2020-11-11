import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {
  return(
    <Jumbotron className="bg-transparent jumbotron-fluid py-4">
      <Container className="d-flex justify-content-center pt-5">
        <Row>
          <Col>
            { props.title && <h2 style={{fontFamily: "fantasy"}}>{props.title}</h2> }
            { props.subTitle && <h1 className="pl-5" style={{fontWeight: "600", fontFamily: "fantasy"}}>{props.subTitle}</h1> }
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Hero;
