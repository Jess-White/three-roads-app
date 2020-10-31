import React, {useState} from "react";
import { QUESTIONDATA } from '../Services/QuestionData.js';
import { createQuizArray, getTriviaRound, reformatQuestions } from '../Services/QuestionFunctions.js';
import Question from './Question.js'

export default function TriviaRound() {
  const [scoreCorrect, setScoreCorrect] = useState(0)
  const [scoreIncorrect, setScoreIncorrect] = useState(0)
  const [reformattedRound, setreformattedRound] = useState(reformatQuestions())


    // this.checkIndex = this.checkIndex.bind(this);

    function handleAnswerSelected(isCorrect) {
      if (isCorrect) {
        setScoreCorrect(scoreCorrect + 1)
      } else {
        setScoreIncorrect(scoreIncorrect + 1)
      }
    }

    console.log(reformattedRound);
    return (
      <div>
        <h1>Correct Score: {scoreCorrect}</h1>
        <h1>Incorrect Score: {scoreIncorrect}</h1>
        {reformattedRound.map((questionComponents, index) => (
            <Question question={questionComponents} key={index} index={index} handleAnswerSelected={handleAnswerSelected}/>
          )
        )}
      </div>
    );
  };
