import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

/*****************
 * Render Methods
 *****************/

// Main render
export const ProgressDisplay = () => {
  const questions = getQuestions();
  console.log(questions);
  return (
    <Container className={"border py-3 px-5"}>
      <h3 className="pb-2 mb-3 border-bottom">Progress</h3>
      {ControlButtons()}
      <Row className={"mt-2"}>
        {NumberTable()}
      </Row>
    </Container>
  )
};

const ControlButtons = () => {
  return (
    <Row>
      <Col>
        <ButtonGroup>
          <Button
            variant={"light"}
          >
            Session
          </Button>
          <Button
            variant={"secondary"}
          >
            Overall
          </Button>
        </ButtonGroup>
      </Col>
      <Col>
        <Button variant={"danger"} size={"sm"}>
          clear
        </Button>
      </Col>
    </Row>
  )
};

const TableHeader = () => {
  let headers = [<th key={0} />];
  for (let i = 1; i <= 12; i++) {
    // TODO: make this a selector
    headers.push(
      <th key={i}>
        {i}
      </th>
    );
  }
  return(
    <thead>
    <tr>
      {headers}
    </tr>
    </thead>
  )
};

const TableRows = () => {
  let rows = [];
  for (let i = 1; i <= 12; i++) {
    let cells = [];
    for (let j = 1; j <= 12; j++) {
      cells.push(
        <td key={j} />
      )
    }
    rows.push(
      <tr key={i}>
        <td key={0}>
          {i}
        </td>
        {cells}
      </tr>
    )
  }
  return (
    <tbody>
      {rows}
    </tbody>
  )
};

const NumberTable = () => {
  return (
    <Table bordered size={"sm"}>
      {TableHeader()}
      {TableRows()}
    </Table>
  );
};

/*******************
 * HTTP METHODS
 *******************/

 const getQuestions = async () => {
   const apiUri = 'http://localhost:8080';

   return await fetch(apiUri + '/questions')
    .then((response) => {
      return response.json()
    })
    .then((questions) => {
      console.log(questions);
      return questions;
    })

 }


export default ProgressDisplay;