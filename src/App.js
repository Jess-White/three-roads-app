import React, { useState, useEffect } from 'react';
import TriviaRound from './Components/TriviaRound';
import {QUESTIONDATA} from './Services/QuestionData';
import { createQuizArray, getQuestion } from './Services/QuestionFunctions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([])
  const [randomquestion, setRandomQuestion] = useState([])

  // useEffect(() => {
  // }, [])

  return (
    <div className="App">
      <TriviaRound />
    </div>
  );
}

export default App;

