import React, { Component } from 'react';

export default class Scores extends React.Component {
  render() {
    console.log(this.props.scores, "crepe")
    return (
        <div>
        {this.props.scores.map(score =>
          <div>
            <h1>{score.username}</h1>
            <h2>{score.correct}</h2>
            <h2>{score.incorrect}</h2>
          </div>
          )}
        </div>
      );
    }
  }