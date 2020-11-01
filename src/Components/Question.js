import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
export default function Question({question, handleAnswerSelected, handleGetQuestion, handleGetCurrentQuestion}) {

    return (
      <div>
      <div>
        <div>
          <Card style={{backgroundColor: "#cc4400", padding: "2%"}}>
          <Card.Title style={{backgroundColor: "#b33b00", padding: "1%"}}><h2>
          {question.question}</h2></Card.Title>
          <ListGroup variant="flush">

          {question.answers.map(answer =>
          <ListGroup.Item style={{backgroundColor: "#802a00", cursor: "pointer"}} 
              onClick={() => {
                if (answer === question.correct) {
                  handleAnswerSelected(true)
                }
                else {
                  handleAnswerSelected(false)}
                }}>
              <h4>{answer}</h4>
              </ListGroup.Item>
          )}
          </ListGroup>
          </Card>
        </div>
      </div>
      </div>
    );
  };