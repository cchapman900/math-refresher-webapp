import React from 'react';

import OperationSelectButtons from "./OperationSelectButtons";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressDisplay from "./ProgressDisplay";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Math Refresher!</h1>
        <Container className={"mt-5"}>
          <Row>
            <Col>
              <OperationSelectButtons />
            </Col>
            <Col>
              <ProgressDisplay/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;