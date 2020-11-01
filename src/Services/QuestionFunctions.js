import {QUESTIONDATA} from './QuestionData';

// make a function to create a new array for each quiz out of the constant QUESTIONDATA

export const createQuizArray = () => {
  let questionDataArray = [];
  QUESTIONDATA.forEach((question) => {
    questionDataArray.push(question);
  })
  return questionDataArray;
}

export const randomizeQuestions = () => {
  let randomizedArray = createQuizArray();
  for (let i = randomizedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = randomizedArray[i]
    randomizedArray[i] = randomizedArray[j]
    randomizedArray[j] = temp
  }
  return randomizedArray
}

// make function to select one question from the question array to display
//and remove it from the question array

export const getQuestion = () => {
    let thisPlayArray = createQuizArray()
    let randomNumber = Math.floor(Math.random() * thisPlayArray.length);
    let randomQuestion = (thisPlayArray[randomNumber]);
    thisPlayArray.splice(randomNumber)
    return randomQuestion
}

// make function to select ten questions question from the question array to push into an array for a "round" of questions and push into a round array

// export const getTriviaRound = () => {
//   let thisPlayArray = createQuizArray()
//   let roundArray = []
//   let counter = 0
//   while (counter < 10) {
//     let randomNumber = Math.floor(Math.random() * thisPlayArray.length);
//     let randomQuestion = (thisPlayArray[randomNumber]);
//     roundArray.push(randomNumber)
//     thisPlayArray.splice(randomNumber)
//     counter += 1
//   }
//   return roundArray
// }

// export const getTriviaRound = () => {
//   let thisPlayArray = randomizeQuestions()
//   let roundArray = []
//   let counter = 0
//   while (counter < 10) {
//     roundArray.push(thisPlayArray[counter])
//     thisPlayArray.splice(counter)
//     counter += 1
//   }
//   return roundArray
// }

export const getTriviaRound = () => {
  let roundArray = []
  let pullArray = randomizeQuestions()
  let counter = 0
  while (counter < 10) {
    roundArray.push(pullArray[counter])
    pullArray.shift()
    counter += 1
  }
  return roundArray
}

// export const createAnswerArray = () => {
//   let roundArray = getTriviaRound() 
//   roundArray.map((roundQuestion) => {
//     let answerArray = []
//     answerArray.push(roundQuestion.correct)
//     roundQuestion.incorrect.map((incorrectOption) => {
//       answerArray.push(incorrectOption)
//     })
//     return answerArray
//   })
// }

// export const randomizeAnswerArray = () => {
//   let randomizedAnswerArray = createAnswerArray() 
//   for (let i = randomizedAnswerArray.length - 1; i > 0; i--){
//     const j = Math.floor(Math.random() * i)
//     const temp = randomizedAnswerArray[i]
//     randomizedAnswerArray[i] = randomizedAnswerArray[j]
//     randomizedAnswerArray[j] = temp
//   }
//   return randomizedAnswerArray
// }

// export const getAnswers = () => {
//   let answerArray = []
//   let selectedQuestion = getQuestion()
//   answerArray.push(selectedQuestion.correct)
//   selectedQuestion.incorrect.map((incorrectOption) => {
//     answerArray.push(incorrectOption)
//   })
//   return answerArray
// }

// export const randomizeAnswers = () => {
// let randomizedAnswers = getAnswers()
//   for (let i = randomizedAnswers.length - 1; i > 0; i--){
//     const j = Math.floor(Math.random() * i)
//     const temp = randomizedAnswers[i]
//     randomizedAnswers[i] = randomizedAnswers[j]
//     randomizedAnswers[j] = temp
//   }
//   return randomizedAnswers
// }

// export const getCorrectAnswer = () => {
//   correctAnswer = selectedQuestion.correct
// }

// export const shuffleAnswers = () => {
//   let shuffleArray = getAnswers()
//   for (let i = shuffleArray.length - 1; i > 0; i--){
//     const j = Math.floor(Math.random() * i)
//     const temp = shuffleArray[i]
//     shuffleArray[i] = shuffleArray[j]
//     shuffleArray[j] = temp
//   }
//   return shuffleArray
// }

// export const incrementScore = () => {
//   let correctScore = 0
//   let incorrectScore = 0
//   let correctAnswer = ""
//   if (correctAnswer === selectedAnswer) {
//     correctScore += 1
//   } else {
//     incorrectScore += 1
//   }
// }
//make function to set the next question

export const reformatQuestions = () => {
  let reformattedArray = getTriviaRound().map((question) => {
    question.answers = []
    question.answers.push(question.correct)
      question.incorrect.map((incorrectOption) => {
        question.answers.push(incorrectOption)
      })
    for (let i = question.answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = question.answers[i]
      question.answers[i] = question.answers[j]
      question.answers[j] = temp
    }
    return question
  })
  return reformattedArray
}

// const container = {};
//     container[question.question] = question.question;
//     container[question.correct] = question.correct

// const myUsers = [
//     { name: 'shark', likes: 'ocean' },
//     { name: 'turtle', likes: 'pond' },
//     { name: 'otter', likes: 'fish biscuits' }
// ]
// const usersByLikes = myUsers.map(item => {
//     const container = {};
//     container[item.name] = item.likes;
//     container.age = item.name.length * 10;
//     return container;
// })
// console.log(usersByLikes);

// original hash:
// // {question: "question", 
//     correct: "correct", 
//     incorrect: 
//       ["incorrect", "incorrect", "incorrect"]
//     }
//revised hash:
//  {question: "question",
//    correct: "correct",
// // answers: 
//      ["incorrect", "incorrect", "incorrect", "correct"]
// }


// export const createAnswerArray = () => {
//   let roundArray = getTriviaRound() 
//   roundArray.map((roundQuestion) => {
//     let answerArray = []
//     answerArray.push(roundQuestion.correct)
//     roundQuestion.incorrect.map((incorrectOption) => {
//       answerArray.push(incorrectOption)
//     })
//     return answerArray
//   })
// }