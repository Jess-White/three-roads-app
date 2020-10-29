import React, {Component} from "react";
import { QUESTIONDATA } from './QuestionData.js';

// make function to grab one question out of the question array
// and remove it from the existing array

export const getQuestion = () => {
  let thisPlayArray = QUESTIONDATA;
  let randomNumber = Math.floor(Math.random() * QUESTIONDATA.length);
  let randomQuestion = (thisPlayArray[randomNumber]);
  thisPlayArray.splice(randomNumber);
  return randomQuestion
  }

// make function to append all four answers to an array and shuffle the array
const answerShuffle = () => {
  let selectedQuestion = getQuestion() 
  let answerArray = []
  selectedQuestion.map((question) => {
    answerArray.push(question.correct)
    question.incorrect.map((incorrectAnswer) => {
      answerArray.push(incorrectAnswer)
      })
  })
}

// make function to compare selected answer to correct answer
const compareAnswer = () => {
  let selectedAnswer = ""
  let correctScore = 0
  let incorrectScore = 0
  if (selectedAnswer === correctAnswer) {
    correctScore += 1;
  } else {
    incorrectScore += 1;
  }
}

const nextQuestion = () => {

}


export const tallyVotes = (votes) => {
  let tallyArray = 
  [{"name": "ember.js", "total": 0},
  {"name": "vue", "total": 0},
  {"name": "angular.js", "total": 0},
  {"name": "react", "total": 0}]
  votes.forEach((vote) => {
    tallyArray.forEach((tally) => {
      if (tally["name"] === vote.framework) {
        tally["total"] = tally["total"] + 1
      }
    });
  })
  return tallyArray;
}

QUESTIONDATA.map()

export default class QuestionContainer extends React.Component {
  render() {
    console.log(QUESTIONDATA)
    return (
        <div>
        {QUESTIONDATA.map(question =>
          <div>
            <h1>{question.question}</h1>
            <h2>{question.correct}</h2>
            {question.incorrect.map(incorrect => 
              <h2>{incorrect}</h2>
              )}
          </div>
          )}
        </div>
      );
    }
  };