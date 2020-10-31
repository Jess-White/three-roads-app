import React, { Component } from 'react';

export default class ScoreChart extends React.Component {
  render() {
    console.log(this.props.score)
    return (
        <div>
        {this.props.score.map(score =>
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