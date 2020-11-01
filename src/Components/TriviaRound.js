import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import { reformatQuestions } from '../Services/QuestionFunctions.js';
import Question from './Question.js'
import AllDoneAlert from './AllDoneAlert.js'
import CorrectAlert from './CorrectAlert.js'
import IncorrectAlert from './IncorrectAlert.js'
import Button from 'react-bootstrap/Button';

export default function TriviaRound() {
  const [scoreCorrect, setScoreCorrect] = useState(0)
  const [scoreIncorrect, setScoreIncorrect] = useState(0)
  const [reformattedRound, setReformattedRound] = useState(reformatQuestions())
  const [currentQuestion, setCurrentQuestion] = useState(reformattedRound[0])
  const [index, setIndex] = useState(1)
  const [isFinished, setIsFinished] = useState(false)
  const [finalScore, setFinalScore] = useState(0)
  const [isCorrect, setCorrect] = useState(false)
  const [isIncorrect, setIncorrect] = useState(false)
  const [showFinalScore, setShowFinalScore] = useState(false)

    // this.checkIndex = this.checkIndex.bind(this);

    function resetQuiz() {
      setReformattedRound(reformatQuestions())
      setCurrentQuestion(reformattedRound[0])
      setIndex(0)
      setIsFinished(false)
      setFinalScore(0)
      setShowFinalScore(false)
      setScoreCorrect(0)
      setScoreIncorrect(0)
    }

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
      handleCurrentQuestion()
    }

    function handleIsFinished() {
      setIsFinished(true)
    }

    function handleFinalScore() {
    setFinalScore(scoreCorrect)
    setShowFinalScore(true)
  }

    function handleCurrentQuestion() {
      console.log("waffle")
      if (index < 10) {
        setIndex(index + 1)
        console.log(index)
        setCurrentQuestion(reformattedRound[index])
        console.log(reformattedRound[index])
      }
      else if (index === 10) {
        handleIsFinished()
      }
    }

    return (
      <div>
      <Card style={{backgroundColor: "#cc4400"}}>
      <div>
        <div className="meter">
          <progress style={{backgroundColor: "#cc4400", width: "100%"}} max="10" value={index}></progress>
        </div>
        <h1>Question Number: {index}</h1>
        <h1>Correct Score: {scoreCorrect}</h1>
        <h1>Incorrect Score: {scoreIncorrect}</h1>
          <Question question={currentQuestion} handleAnswerSelected={handleAnswerSelected} />
      </div>
      <div>
        {isIncorrect && <IncorrectAlert></IncorrectAlert>}
        {isCorrect && <CorrectAlert></CorrectAlert>}
        {isFinished && <AllDoneAlert></AllDoneAlert>}
        {isFinished ? (
        <Button 
          className="btn-lg"
          style={{
            borderColor: "#319b89",
            backgroundColor: "#319b54", 
            color: "#0c2715", 
            fontSize: "20px", 
            fontWeight: "bold",
            margin: "2%"
          }} onClick={handleFinalScore}>See Your Final Score</Button>
        ) : null }
        {showFinalScore ? (
        <h1>{finalScore} out of 10! Good job!</h1>
        ) : null }
        {isFinished ? (
        <Button 
          className="btn-lg"
          style={{
            width: "50%",
            borderColor: "#319b89",
            backgroundColor: "#319b54", 
            color: "#0c2715", 
            fontSize: "20px", 
            fontWeight: "bold",
            margin: "2%"
          }} onClick={resetQuiz}>Play Another Round</Button>
        ) : null }
      </div>
      </Card>
      </div>
    );
  };
