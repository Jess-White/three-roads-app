import React, {useState} from "react";
import { QUESTIONDATA } from '../Services/QuestionData.js';
import { createQuizArray, getTriviaRound, randomizeAnswers } from '../Services/QuestionFunctions.js';
import Question from './Question.js'

export default function TriviaRound() {
  const [scoreCorrect, setScoreCorrect] = useState(0)
  const [scoreIncorrect, setScoreIncorrect] = useState(0)
  const [triviaRound, setTriviaRound] = useState(getTriviaRound())
  const [questionNumber, setQuestionNumber] = useState(0)
    // this.checkIndex = this.checkIndex.bind(this);

  function handleQuestionNumber() {
    setQuestionNumber(questionNumber + 1)
    }

  function handleAnswerSelected(isCorrect) {
    if (isCorrect) {
      setScoreCorrect(scoreCorrect + 1)
    } else {
      setScoreIncorrect(scoreIncorrect + 1)
    }
    handleQuestionNumber()
  }

    return (
      <div>
        <h1>{scoreCorrect}</h1>
        <h1>{scoreIncorrect}</h1>
        <h1>{questionNumber}</h1>
        {triviaRound.map((questionComponents, index) => (
            <Question question={questionComponents} index={index} questionNumber={questionNumber} handleAnswerSelected={handleAnswerSelected}/>
          )
        )}
      </div>
    );
  };
