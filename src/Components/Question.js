import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import { addFinalScore } from '../Services/PlayersandScoresAPI';

export default function Question({question, handleAnswerSelected, handleGetQuestion, handleGetCurrentQuestion}) {
  const [questionNumber, setQuestionNumber] = useState(0)
  const [finalScore, setFinalScore] = useState(0)
  const [scoreCorrect, setScoreCorrect] = useState(0)
  const [scoreIncorrect, setScoreIncorrect] = useState(0)
  const [questionCounter, setQuestionCounter] = useState(0)
  // const [getNextQuestion, setGetNextQuestion] = useState(0)
  // const [getQuestion, setGetQuestion] = useState([0])
  // const [getCurrentQuestionIndex, setGetCurrentQuestionIndex] = useState(0)

    // this.checkIndex = this.checkIndex.bind(this);

  function handleFinalScore() {
    setFinalScore(scoreCorrect)
    addFinalScore()
  }

    function handleViewScores() {
    }

  // useEffect(() => {
  //   handleFinalScore()
  // });

    return (
      <div>
      <div>
        <div>
          <div>
          <h1>{question.question}</h1>
          <h2 style={{color: "red"}}>{question.correct}</h2>
          {question.answers.map(answer =>
          <h2 style={{color: "blue"}} 
              onClick={() => {
                if (answer === question.correct) {
                  handleAnswerSelected(true)
                }
                else {
                  handleAnswerSelected(false)}
                }}>
              {answer}
              </h2>
          )}
          </div>
        </div>
      </div>
      <button onClick={handleFinalScore}>See Your Final Score</button>
      <h1>{finalScore}</h1>
      <button onClick={handleViewScores}>See All Final Scores</button>
      </div>

      // {isFinished && <AllDoneAlert></AllDoneAlert>}
      // {isIncorrect && <IncorrectAlert></IncorrectAlert>}
      // {isCorrect && <CorrectAlert></CorrectAlert>}}
    );
  };

  