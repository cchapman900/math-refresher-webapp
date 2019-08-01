import React from 'react';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


class OperationSelectButtons extends React.Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <Button
              variant="secondary"
              size={"lg"}
              className={"m-5"}
            >
              +
            </Button>
            <Button
              variant="secondary"
              size={"lg"}
              className={"m-5"}
            >
              -
            </Button>
            <br/>
            <Button
              variant="secondary"
              size={"lg"}
              className={"m-5"}
            >
              x
            </Button>
            <Button
              variant="secondary"
              size={"lg"}
              className={"m-5"}
            >
              ÷
            </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}


export default OperationSelectButtons;