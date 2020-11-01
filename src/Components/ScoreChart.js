import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class ScoreChart extends React.Component {
  render() {
    console.log(this.props.scores)
    return (
        <div>
        {this.props.scores.map(score =>
          <Card style={{backgroundColor: "black", paddingBottom: "2%"}}>
          <div>
            <Card.Header><Card.Title>{score.username}</Card.Title></Card.Header>
            <Card.Text>{score.correct}</Card.Text>
            <Card.Text>{score.incorrect}</Card.Text>
          </div>
          </Card>
          )}
        </div>
      );
    }
  }

