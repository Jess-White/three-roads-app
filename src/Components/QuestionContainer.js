import React, {useState} from "react";
import { QUESTIONDATA } from '../Services/QuestionData.js';
import { createQuizArray, getQuestion, getTriviaRound } from '../Services/QuestionFunctions.js';

export default function QuestionContainer() {

    return (
      <div>
        {getTriviaRound().map((questionComponents, index) => {
          return (

            <div key={index}>
            <h1>{questionComponents.question}</h1>
            <h2 style={{color: "red"}}>{questionComponents.correct}</h2>
            {questionComponents.incorrect.map(incorrectOption =>
              <h2>{incorrectOption}</h2>
              )}
            </div>

            )

        })}
      </div>
    );
  };