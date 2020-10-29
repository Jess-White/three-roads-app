import React, { useState, useEffect } from 'react';
// import { ScoreData } from './Components/ScoreData';
import { getAllScores } from './Services/PlayersandScoresAPI';
// import Header from './Components/Header';
// import ScoreChart from './Components/ScoreChart';
import PlayerForm from './Components/PlayerForm';
import QuestionContainer from './Components/QuestionContainer';
// import QuestionContainer from './Components/QuestionContainer';
// import {QUESTIONDATA} from './Components/QuestionData';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  // const [questions, setQuestions] = useState([])
  // const [question, setQuestion] = useState([])
  const player = useState({username: '', email: 'email'})

  const [players, setPlayers] = useState([])
  // // const [score, setScore] = useState({username: '', correct: '', incorrect: ''})
  const [scores, setScores] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    getAllScores() 
      .then(response => {
        setScores(response)
      }).catch(error => {
        setError("Something went wrong.")
      })
  }, [])

  const handleAddPlayer = (player) => {
    setPlayers([...players, player])
  }

  return (
    <div className="App">
      <QuestionContainer />
    </div>
  );
}

export default App;

