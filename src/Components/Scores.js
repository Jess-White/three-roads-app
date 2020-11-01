import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class Scores extends React.Component {
  render() {
    console.log(this.props.scores, "crepe")
    return (
        <div>
        {this.props.scores.map(score =>
          <Card style={{backgroundColor: "black", paddingBottom: "2%"}}>
          <div>
            <Card.Title>{score.username}</Card.Title>
            <Card.Text>{score.correct}</Card.Text>
            <Card.Text>{score.incorrect}</Card.Text>
          </div>
          </Card>
          )}
        </div>
      );
    }
  }

