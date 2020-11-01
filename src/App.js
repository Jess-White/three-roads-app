import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Header from './Components/Header';
import Kitten from './Components/Kitten';
import TriviaRound from './Components/TriviaRound';
import About from './Components/About';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showNoTrivia, setShowNoTrivia] = useState(false);

  const [username, setUsername] = useState('')
  const [showWelcome, setShowWelcome] = useState(false);
  const [showAddPlayer, setShowAddPlayer] = useState(false);
  const [showHeaderButtons, setShowHeaderButtons] = useState(true);


  const handleSubmit = (event) => {
    event.preventDefault();
    setShowWelcome(true)
    setShowAddPlayer(false)
  }

  const handleShowQuiz = () => {
    setShowQuiz(true);
    setShowAbout(false);
    setShowNoTrivia(false);
  }

  const handleShowAbout = () => {
    setShowAbout(true);
    setShowQuiz(false);
    setShowNoTrivia(false);
  }

  const handleShowNoTrivia = () => {
    setShowAbout(false);
    setShowQuiz(false);
    setShowNoTrivia(true);
  }

  const handleShowAddPlayer = () => {
    setShowAddPlayer(true)
    setShowHeaderButtons(false)
  }

  const handleCloseQuiz = () => setShowQuiz(false);
  const handleCloseAbout = () => setShowAbout(false);
  const handleCloseNoTrivia = () => setShowNoTrivia(false);

  useEffect(() => {
  }, [])

  return (
    <div className="App">
    <Header />

    {showHeaderButtons ? (
    <div>
    <Button 
        className="btn-lg"
        style={{
          borderColor: "#319b89",
          backgroundColor: "#319b54", 
          color: "#0c2715", 
          fontSize: "20px", 
          fontWeight: "bold",
          margin: "2%"
        }}
        value="Submit"
        type="submit"
        onClick={handleShowAddPlayer}
      >
        Nice! More Trivia!
      </Button>
      <Button 
        className="btn-lg"
        style={{
          borderColor: "#319b89",
          backgroundColor: "#319b54", 
          color: "#0c2715", 
          fontSize: "20px", 
          fontWeight: "bold",
          margin: "2%"
        }}
        value="Submit"
        type="submit"
        onClick={handleShowNoTrivia}
      >
        No More Trivia! 
    </Button>
    </div>
    ) : null}

    <Modal show={showNoTrivia} onHide={handleCloseNoTrivia}>
          <ModalBody>
          <Kitten></Kitten>
          </ModalBody>
            <ModalFooter>
              <Button 
                className="close-btn" 
                color="danger" 
                style={{ 
                  borderColor: "#319b89",
                  backgroundColor: "#0c2715", 
                  color: "#319b54", 
                  fontSize: "20px",
                  width: "100%"
                }} 
                onClick={handleCloseNoTrivia}>Close
              </Button>
            </ModalFooter>
          </Modal>

    {showAddPlayer ? (
      <div>
        <Card style={{backgroundColor: "#cc4400"}}>
          <div className="card-header" style={{backgroundColor: "#b33b00"}}>
          Add New Player!
          </div>
          <div className="card-body" style={{backgroundColor: "#ee4e00"}}>
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
                  style={{
                    borderColor: "#319b89",
                    backgroundColor: "#319b54", 
                    color: "#0c2715", 
                    fontSize: "20px", 
                    fontWeight: "bold",
                    margin: "2%"
                  }}
                  value="Submit"
                  type="submit"
                >
                  Add New Player
                </Button>
            </form>
          </div>
        </Card>
      </div>
      ) : null}

      {showWelcome ? (
        <div>
        <h1>Welcome, {username}!</h1>
          <Button 
            className="btn-lg" 
            style={{
              borderColor: "#319b89",
              backgroundColor: "#319b54", 
              color: "#0c2715", 
              fontSize: "20px", 
              fontWeight: "bold",
              margin: "2%"
            }} 
            type="submit"
            onClick={handleShowQuiz}>Take the Quiz!
          </Button>
          <Modal style={{color: "#cc4400"}} show={showQuiz} onHide={handleShowQuiz}>
          <ModalBody>
          <TriviaRound/>
          </ModalBody>
            <ModalFooter>
              <Button 
              className="close-btn" 
              style={{ 
                borderColor: "#319b89",
                backgroundColor: "#0c2715", 
                color: "#319b54",
                fontSize: "20px", 
                fontWeight: "bold",
                width: "100%"
              }} 
              onClick={handleCloseQuiz}>Close</Button>
            </ModalFooter>
          </Modal>

        <Button 
            className="btn-lg" 
            style={{
              borderColor: "#319b89",
              backgroundColor: "#319b54", 
              color: "#0c2715", 
              fontSize: "20px", 
              fontWeight: "bold",
              margin: "2%"
            }} 
            type="submit"
            onClick={handleShowAbout}>About the Quiz
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
                  borderColor: "#319b89",
                  backgroundColor: "#0c2715", 
                  color: "#319b54",
                  fontSize: "20px", 
                  width: "100%"
                }} 
                onClick={handleCloseAbout}>Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      ) : null}
    </div>
  );
}

export default App;