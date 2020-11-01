import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import Card from 'react-bootstrap/Card';

export default class ScoreBarChart extends React.Component {
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


const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}

//   var stackedBar = new Chart(ctx, {
//     type: 'bar',
//     data: data,
//     options: {
//         scales: {
//             xAxes: [{
//                 stacked: true
//             }],
//             yAxes: [{
//                 stacked: true
//             }]
//         }
//     }
// });