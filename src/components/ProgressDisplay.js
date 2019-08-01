import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToggleButton from 'react-bootstrap/ToggleButton'

class ProgressDisplay extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            Session
          </Col>
          <Col>
            <ToggleButton type={"radio"}/>
          </Col>
          <Col>
            Overall
          </Col>
          <Col>
            trash
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ProgressDisplay;