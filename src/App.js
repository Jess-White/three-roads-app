import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Header from './Components/Header';
import TriviaRound from './Components/TriviaRound';
import ScoreChart from './Components/ScoreChart';
import About from './Components/About';
// import {QUESTIONDATA} from './Services/QuestionData';
import { createQuizArray, getQuestion } from './Services/QuestionFunctions';
import { getAllScores } from './Services/PlayersandScoresAPI';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([])
  const [randomquestion, setRandomQuestion] = useState([])
  const [correct, setCorrect] = useState([])
  const [incorrect, setIncorrect] = useState([])
  const [finalScore, setFinalScore] = useState([])
  const score = useState({username: '', correct: '', incorrect: ''})
  const [error, setError] = useState("")
  const [scores, setScores] = useState([])
  const [showScores, setShowScores] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const [username, setUsername] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Submitting New Player ${username}')
  }


  const handleShowQuiz = () => {
    setShowQuiz(true);
    setShowFinalScore(false);
    setShowScores(false);
    setShowAbout(false);
  }

  const handleShowFinalScore = () => {
    setShowFinalScore(true);
    setShowQuiz(false);
    setShowScores(false);
    setShowAbout(false);
  }

  const handleShowScores = () => {
    setShowScores(true);
    setShowQuiz(false);
    setShowFinalScore(false);
    setShowAbout(false);
  }

  const handleShowAbout = () => {
    setShowAbout(true);
    setShowScores(false);
    setShowQuiz(false);
    setShowFinalScore(false);
  }

  const handleCloseScores = () => setShowScores(false);
  const handleCloseQuiz = () => setShowQuiz(false);
  const handleCloseFinalScore = () => setShowFinalScore(false);
  const handleCloseAbout = () => setShowAbout(false);


  const handleSetUsername = () => setUsername(username)

  const handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

  useEffect(() => {
    getAllScores() 
      .then(response => {
        setScores(response)
      }).catch(error => {
        setError("Something went wrong.")
      })
  }, [])

  return (
    <div className="App">
    <Header />

      <div>
        <Card style={{backgroundColor: "#000058"}}>
          <div className="card-header">
          Add New Player!
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <h4>Enter Your Username:</h4>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  value={username}
                  onChange={event => setUsername(event.target.value)}
                  required
                />
              </div>
                <Button 
                  className="btn-lg"
                  value="Submit"
                  type="submit"
                >
                  Add New Player
                </Button>
            </form>
          </div>
        </Card>
      </div>

      <Button 
        className="btn-lg" 
        style={{
          backgroundColor: "#ffff1b", 
          color: "#000080", 
          fontSize: "20px", 
          fontWeight: "bold",
          margin: "2%"
        }} 
        type="submit"
        onClick={handleShowQuiz}>Take the Quiz!
      </Button>
      <Modal show={showQuiz} onHide={handleShowQuiz}>
      <ModalBody>
      <TriviaRound/>
      </ModalBody>
        <ModalFooter>
          <Button 
          className="close-btn" 
          style={{ 
            backgroundColor: "#000080", 
            color: "#ffff1b", 
            width: "100%"
          }} 
          onClick={handleCloseQuiz}>Close</Button>
        </ModalFooter>
      </Modal>

      <Button 
        className="btn-lg" 
        style={{
          backgroundColor: "#ffff1b", 
          color: "#000080", 
          fontSize: "20px", 
          fontWeight: "bold",
          margin: "2%"
        }} 
        type="submit"
        onClick={handleShowFinalScore}>See Your Score
      </Button>
      <Modal show={showFinalScore} onHide={handleShowFinalScore}>
      <ModalBody>
      </ModalBody>
      <ScoreChart score={score} correct={correct} incorrect={incorrect}/>
        <ModalFooter>
          <Button 
          className="close-btn" 
          style={{ 
            backgroundColor: "#000080", 
            color: "#ffff1b", 
            width: "100%"
          }} 
          onClick={handleCloseFinalScore}>Close</Button>
        </ModalFooter>
      </Modal>

      <Button 
        className="btn-lg" 
        style={{
          backgroundColor: "#ffff1b", 
          color: "#000080", 
          fontSize: "20px", 
          fontWeight: "bold",
          margin: "2%"
        }} 
        type="submit"
        onClick={handleShowScores}>See How Other People Scored
      </Button>
      <Modal show={showScores} onHide={handleShowScores}>
      <ModalBody>
      <ScoreChart scores={scores}/>
      </ModalBody>
        <ModalFooter>
          <Button 
          className="close-btn" 
          style={{ 
            backgroundColor: "#000080", 
            color: "#ffff1b", 
            width: "100%"
          }} 
          onClick={handleCloseScores}>Close</Button>
        </ModalFooter>
      </Modal>

    <Button 
        className="btn-lg" 
        style={{
          backgroundColor: "#ffff1b", 
          color: "#000080", 
          fontSize: "20px", 
          fontWeight: "bold",
          margin: "2%"
        }} 
        type="submit"
        onClick={handleShowAbout}>About This Quiz?
      </Button>
      <Modal show={showAbout} onHide={handleCloseAbout}>
      <ModalBody>
      <About></About>
      </ModalBody>
        <ModalFooter>
          <Button 
            className="close-btn" 
            color="danger" 
            style={{ 
              backgroundColor: "#000080", 
              color: "#ffff1b", 
              width: "100%"
            }} 
            onClick={handleCloseAbout}>Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
