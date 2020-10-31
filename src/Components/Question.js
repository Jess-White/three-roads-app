import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';

export default function Question({question, index, handleAnswerSelected}) {
  const [questionNumber, setQuestionNumber] = useState(0)
  const [finalScore, setFinalScore] = useState(0)
  const [scoreCorrect, setScoreCorrect] = useState(0)
  const [scoreIncorrect, setScoreIncorrect] = useState(0)
  const [questionCounter, setQuestionCounter] = useState(0)
    // this.checkIndex = this.checkIndex.bind(this);

    function handleQuestionNumber() {
      setQuestionNumber(questionNumber + 1)
    }

    function handleFinalScore() {
      setFinalScore(finalScore + scoreCorrect)
    }

    function handleViewScores() {
    }

    function handleQuestionCounter() {
      setQuestionCounter(questionCounter + 1)
    }

  useEffect(() => {
    handleFinalScore()
  });

    return (
      <div>
      <div>
        <div>
          <h1>Question Number: {questionCounter}</h1>
          <h1>{index}</h1>
          {(index === questionNumber) ? (
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
          ) : null}
        </div>
      </div>
      <div>
        <button onClick={handleQuestionNumber}>Next Question</button>
      </div>
      <button onClick={handleFinalScore}>See Your Final Score</button>
      <h1>{finalScore}</h1>
      <button onClick={handleViewScores}>See All Final Scores</button>
      </div>
    );
  };

  