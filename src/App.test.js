import { render, screen } from '@testing-library/react';
import App from './App';
import About from './Components/About';
import TriviaRound from './Components/TriviaRound';

import { mount } from './enzyme';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Viridian link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Viridian/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders About github link', () => {
  render(<About />);
  const linkElement = screen.getByText(/here/i);
  expect(linkElement).toBeInTheDocument();
});

const banana = {
  username: "banana",
  email: "banana@aol.com"
};

describe("testing for props", () => {
  it("TriviaRound accepts props", () => {
    const wrapper = mount(<TriviaRound banana={banana} />);
    expect(wrapper.props().banana).toEqual(banana);
  });
  it("contains users account email", () => {
    const wrapper = mount(<TriviaRound banana={banana} />);
    const value = wrapper.find("p").text();
    expect(value).toEqual("banana@aol.com");
  });
});

// // make a function to create a new array for each quiz out of the constant QUESTIONDATA

// export const createQuizArray = () => {
//   let questionDataArray = [];
//   QUESTIONDATA.forEach((question) => {
//     questionDataArray.push(question);
//   })
//   return questionDataArray;
// }

// // make a function to randomize the questions in the array from createQuizArray

// export const randomizeQuestions = () => {
//   let randomizedArray = createQuizArray();
//   for (let i = randomizedArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * i)
//     const temp = randomizedArray[i]
//     randomizedArray[i] = randomizedArray[j]
//     randomizedArray[j] = temp
//   }
//   return randomizedArray
// }

// // make a function to create an array that holds a round of ten trivia questions from the array created in randomizeQuestions

// export const getTriviaRound = () => {
//   let roundArray = []
//   let pullArray = randomizeQuestions()
//   let counter = 0
//   while (counter < 10) {
//     roundArray.push(pullArray[counter])
//     pullArray.shift()
//     counter += 1
//   }
//   return roundArray
// }

// // make a function to format the questions in the array created in randomizeQuestions so that the correct and incorrect answers are shuffled into a single array

// export const reformatQuestions = () => {
//   let reformattedArray = getTriviaRound().map((question) => {
//     question.answers = []
//     question.answers.push(question.correct)
//       question.incorrect.map((incorrectOption) => {
//         return  (question.answers.push(incorrectOption))
//       })
//     for (let i = question.answers.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * i)
//       const temp = question.answers[i]
//       question.answers[i] = question.answers[j]
//       question.answers[j] = temp
//     }
//     return question
//   })
//   return reformattedArray
// }

// // (NOT IN USE) make function to select one question from the question array to display
// //and remove it from the question array (NOT IN USE)

// export const getQuestion = () => {
//     let thisPlayArray = createQuizArray()
//     let randomNumber = Math.floor(Math.random() * thisPlayArray.length);
//     let randomQuestion = (thisPlayArray[randomNumber]);
//     thisPlayArray.splice(randomNumber)
//     return randomQuestion
// }