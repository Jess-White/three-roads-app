import { render, screen } from '@testing-library/react';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import isEqual from 'lodash.isequal'

/* Components */
import TestComponent from './Components/TestComponent'
import Paragraph from './Components/Paragraph'
import Toggle from './Components/Toggle'
import Hooks from './Components/Hooks'

import { createQuizArray, randomizeQuestions, getTriviaRound, reformatQuestions, getQuestion } from './Services/QuestionFunctions'
import { QUESTIONDATA } from './Services/QuestionData'



// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() })

//function tests:

// export const createQuizArray = () => {
//   let questionDataArray = [];
//   QUESTIONDATA.forEach((question) => {
//     questionDataArray.push(question);
//   })
//   return questionDataArray;
// }

// {
//   "question": "A group of tigers are referred to as:",
//   "incorrect": ["Chowder", "Pride", "Destruction"],
//   "correct": "Ambush"
// }

describe('createQuizArrayEqual', () => {
  it('should return an array that is equal to QUESTIONDATA', () => {
    const quizArray = createQuizArray()
    expect(isEqual(quizArray, QUESTIONDATA)).toEqual(true)
  })
})

describe('createQuizArrayItemEqual', () => {
  it('should return an array whose first value is equal to the first value of QUESTIONDATA', () => {
    const quizArray = createQuizArray() 
    expect(isEqual(quizArray[0], QUESTIONDATA[0])).toEqual(true)
  })
})

describe('createQuizArrayItemValueEqual', () => {
  it('should return an array whose first value has an "incorrect" array that is equal to the same array in QUESTIONDATA', () => {
    const quizArray = createQuizArray() 
    expect(quizArray[0].incorrect === QUESTIONDATA[0].incorrect).toEqual(true)
  })
})

describe('createQuizArrayLengthEqual', () => {
  it('should return an array that is the same length as QUESTIONDATA', () => {
    const quizArray = createQuizArray() 
    expect(quizArray.length === QUESTIONDATA.length).toEqual(true)
  }) 
})

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

describe('createRandomizedArray', () => {
  it('should return an array that is NOT equal to the original QUESTIONDATA', () => {
    const randomArray = randomizeQuestions()
    expect(isEqual(randomArray, QUESTIONDATA)).toEqual(false)
  })
})

describe('createRandomizedArrayLength', () => {
  it('should return an array that is the same length of the original QUESTIONDATA', () => {
    const randomArray = randomizeQuestions() 
    expect(randomArray.length === QUESTIONDATA.length).toEqual(true)
  })
})

describe('createRandomizedArrayUnequal', () => {
  it('should return an array that is not in the same order as the original QUESTIONDATA', () => {
    const randomArray = randomizeQuestions()
    let counter = 0 
    let randomTester = 0
    while (counter < randomArray.length) {
      if ((isEqual(randomArray[counter], QUESTIONDATA[counter])) === true) {
        randomTester += 1
      }
      counter += 1
    }
    expect(randomTester < (QUESTIONDATA.length)/2).toEqual(true)
  })
})
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

describe('triviaRoundLength', () => {
  it('should return an array that contains 10 questions', () => {
    const triviaRound = getTriviaRound() 
    expect(triviaRound.length === 10).toEqual(true)
  });
})

// describe('triviaRoundShift', () => {
//   it('should return an array that is then taken out of the original array', () => {
//     const triviaRound = getTriviaRound() 

//   })
// })

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

describe('addAnswersArray', () => {
  it('should add an array called answers to each question', () => {
    const withAnswerArray = reformatQuestions()
    const testQuestion = withAnswerArray[0] 
    expect(testQuestion.answers !== false).toEqual(true)
  })
})

describe('reformatAnswers', () => {
  it('should add an array called answers that contains all four possible answers', () => {
    const withAnswerArray = reformatQuestions()
    const testQuestion = withAnswerArray[0] 
    expect(testQuestion.answers.length === 4).toEqual(true)
  })
})

describe('pushCorrectAnswerIntoAnswerArray', () => {
  it('should push the correct answer into the answers array', () => {
    const withAnswerArray = reformatQuestions()
    const testQuestion = withAnswerArray[0] 
    expect(testQuestion.answers.includes(testQuestion.correct)).toEqual(true)
  })
} )

// // (NOT IN USE) make function to select one question from the question array to display
// //and remove it from the question array (NOT IN USE)

// export const getQuestion = () => {
//     let thisPlayArray = createQuizArray()
//     let randomNumber = Math.floor(Math.random() * thisPlayArray.length);
//     let randomQuestion = (thisPlayArray[randomNumber]);
//     thisPlayArray.splice(randomNumber)
//     return randomQuestion
// }



//Test constants:

// const [showQuiz, setShowQuiz] = useState(false);
//   const [showAbout, setShowAbout] = useState(false);
//   const [showNoTrivia, setShowNoTrivia] = useState(false);

//   const [username, setUsername] = useState('')
//   const [showWelcome, setShowWelcome] = useState(false);
//   const [showAddPlayer, setShowAddPlayer] = useState(false);
//   const [showHeaderButtons, setShowHeaderButtons] = useState(true);


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setShowWelcome(true)
//     setShowAddPlayer(false)
//   }

//   const handleShowQuiz = () => {
//     setShowQuiz(true);
//     setShowAbout(false);
//     setShowNoTrivia(false);
//   }

//   const handleShowAbout = () => {
//     setShowAbout(true);
//     setShowQuiz(false);
//     setShowNoTrivia(false);
//   }

//   const handleShowNoTrivia = () => {
//     setShowAbout(false);
//     setShowQuiz(false);
//     setShowNoTrivia(true);
//   }

//   const handleShowAddPlayer = () => {
//     setShowAddPlayer(true)
//     setShowHeaderButtons(false)
//   }

//   const handleCloseQuiz = () => setShowQuiz(false);
//   const handleCloseAbout = () => setShowAbout(false);
//   const handleCloseNoTrivia = () => setShowNoTrivia(false);

//   useEffect(() => {
//   }, [])


//component tests:

describe('Paragraph', () => {
  it('should render children inside a p tag', () => {
    const wrapper = shallow(<Paragraph>This is my first test</Paragraph>)
    const paragraph = wrapper.find('p')
    expect(paragraph).toHaveLength(1)
    expect(paragraph.text()).toEqual('This is my first test')
  })
})


describe('Toggle', () => {
  describe('Behavioural (Integration)', () => {
    const wrapper = shallow(<Toggle />);
    it('renders a button with "Toggle" as children', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    });
    it('renders "Toggled" as button children if button is clicked', () => {
      wrapper.find('button').simulate('click');
      expect(wrapper.find('button').text()).toEqual('Toggled');
    });
    it('renders "Toggle" as button children if button is clicked again', () => {
      wrapper.find('button').simulate('click');
      expect(wrapper.find('button').text()).toEqual('Toggle');
    });
  });
  
  describe('Component (Unit)', () => {
    const wrapper = shallow(<Toggle />);
    describe('Toggle function', () => {
      it('toggles "toggled" variable in state', () => {
        expect(wrapper.state('toggled')).toBe(false);
        wrapper.instance().toggle();
        expect(wrapper.state('toggled')).toBe(true);
      });
    });
  });
})

describe('Hooks', () => {
  const wrapper = shallow(<Hooks />);
  it('renders a button with "Toggle" as children', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });
  it('renders "Toggled" as button children if button is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('button').text()).toEqual('Toggled');
  });
  it('renders "Toggle" as button children if button is clicked again', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('button').text()).toEqual('Toggle');
  });
})



//Mock question and test functions

// import App from './App';
// import About from './Components/About';
// import TriviaRound from './Components/TriviaRound';

// import { mount } from './enzyme';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders Viridian link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Viridian/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders About github link', () => {
//   render(<About />);
//   const linkElement = screen.getByText(/here/i);
//   expect(linkElement).toBeInTheDocument();
// });

// const banana = {
//   username: "banana",
//   email: "banana@aol.com"
// };

// describe("testing for props", () => {
//   it("TriviaRound accepts props", () => {
//     const wrapper = mount(<TriviaRound banana={banana} />);
//     expect(wrapper.props().banana).toEqual(banana);
//   });
//   it("contains users account email", () => {
//     const wrapper = mount(<TriviaRound banana={banana} />);
//     const value = wrapper.find("p").text();
//     expect(value).toEqual("banana@aol.com");
//   });
// });

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