import React, {useState} from "react";
import { QUESTIONDATA } from '../Services/QuestionData.js';
import { createQuizArray, getTriviaRound, reformatQuestions } from '../Services/QuestionFunctions.js';
import Question from './Question.js'
import AllDoneAlert from './AllDoneAlert.js'
import CorrectAlert from './CorrectAlert.js'
import IncorrectAlert from './IncorrectAlert.js'

export default function TriviaRound() {
  const [scoreCorrect, setScoreCorrect] = useState(0)
  const [scoreIncorrect, setScoreIncorrect] = useState(0)
  const [reformattedRound, setreformattedRound] = useState(reformatQuestions())
  const [currentQuestion, setCurrentQuestion] = useState(reformattedRound[0])
  const [index, setIndex] = useState(1)
  const [isFinished, setIsFinished] = useState(false)
  const [isCorrect, setCorrect] = useState(false)
  const [isIncorrect, setIncorrect] = useState(false)


    // this.checkIndex = this.checkIndex.bind(this);

    function handleAnswerSelected(isCorrect) {
      if (isCorrect) {
        setScoreCorrect(scoreCorrect + 1)
        setCorrect(true)
        setIncorrect(false)

      } else {
        setScoreIncorrect(scoreIncorrect + 1)
        setIncorrect(true)
        setCorrect(false)
      }
    }

    function handleIsFinished() {
      setIsFinished(true)
    }

    function handleCurrentQuestion() {
      // setIndex(counter)
      // setGetCurrentQuestion(reformattedRound[counter])
      console.log("waffle")
      if (index < 10) {
        setIndex(index + 1)
        console.log(index)
        setCurrentQuestion(reformattedRound[index])
        console.log(reformattedRound[index])
        setIncorrect(false)
        setCorrect(false)
      }
      else if (index === 10) {
        handleIsFinished()
        setIncorrect(false)
        setCorrect(false)
      }
    }

    return (
      <div>
      <div>
        <h1>Question Number: {index}</h1>
        <h1>Correct Score: {scoreCorrect}</h1>
        <h1>Incorrect Score: {scoreIncorrect}</h1>
            <Question question={currentQuestion} handleAnswerSelected={handleAnswerSelected} />
      </div>
      <div>
        {!isFinished ? (
        <button onClick={handleCurrentQuestion}>Next Question</button>
        ) : null }
        {isFinished && <AllDoneAlert></AllDoneAlert>}
        {isIncorrect && <IncorrectAlert></IncorrectAlert>}
        {isCorrect && <CorrectAlert></CorrectAlert>}
      </div>
      </div>
    );
  };
