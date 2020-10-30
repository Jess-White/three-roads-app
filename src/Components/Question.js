import React, {useState} from "react";

export default function Question({question, index, handleAnswerSelected}) {
  const [questionNumber, setQuestionNumber] = useState(0)
    // this.checkIndex = this.checkIndex.bind(this);

    function handleQuestionNumber() {
      setQuestionNumber(questionNumber + 1)
    }

    // function checkIndex(index) {
    //   if (index === this.state.questionNumber) {
    //     return true
    //   }
    // }

    return (
      <div>
      <div>
      {index === questionNumber ? (
        <div>
          <h1>{index}</h1>
          <h1>{question.question}</h1>
          <h2 style={{color: "red"}} onClick={() => handleAnswerSelected(true)}>{question.correct}</h2>
          {question.incorrect.map(incorrectOption =>
          <h2 style={{color: "green"}} onClick={() => handleAnswerSelected(false)}>{incorrectOption}</h2>
          )}
        </div>
        ) : null}
      </div>
      <div>
        <button onClick={handleQuestionNumber}>Next Question</button>
      </div>
      </div>
    );
  };

  