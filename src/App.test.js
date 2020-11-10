import { render, screen } from '@testing-library/react';
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import isEqual from 'lodash.isequal'

import { createQuizArray, randomizeQuestions, getTriviaRound, reformatQuestions } from './Services/QuestionFunctions'
import { QUESTIONDATA } from './Services/QuestionData'

import TriviaRound from './Components/TriviaRound'

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() })

//component tests:

describe('TriviaRoundComponent', () => {
  it('should contain a Card tag', () => {
    const wrapper = shallow(<TriviaRound/>)
    expect(wrapper.containsAnyMatchingElements([
  <progress></progress>
])).toEqual(true);
  })
})

//function tests:

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

describe('triviaRoundLength', () => {
  it('should return an array that contains 10 questions', () => {
    const triviaRound = getTriviaRound() 
    expect(triviaRound.length === 10).toEqual(true)
  });
})

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

// //component tests:

// describe('Paragraph', () => {
//   it('should render children inside a p tag', () => {
//     const wrapper = shallow(<Paragraph>This is my first test</Paragraph>)
//     const paragraph = wrapper.find('p')
//     expect(paragraph).toHaveLength(1)
//     expect(paragraph.text()).toEqual('This is my first test')
//   })
// })


// describe('Toggle', () => {
//   describe('Behavioural (Integration)', () => {
//     const wrapper = shallow(<Toggle />);
//     it('renders a button with "Toggle" as children', () => {
//       expect(wrapper.find('button')).toHaveLength(1);
//     });
//     it('renders "Toggled" as button children if button is clicked', () => {
//       wrapper.find('button').simulate('click');
//       expect(wrapper.find('button').text()).toEqual('Toggled');
//     });
//     it('renders "Toggle" as button children if button is clicked again', () => {
//       wrapper.find('button').simulate('click');
//       expect(wrapper.find('button').text()).toEqual('Toggle');
//     });
//   });
  
//   describe('Component (Unit)', () => {
//     const wrapper = shallow(<Toggle />);
//     describe('Toggle function', () => {
//       it('toggles "toggled" variable in state', () => {
//         expect(wrapper.state('toggled')).toBe(false);
//         wrapper.instance().toggle();
//         expect(wrapper.state('toggled')).toBe(true);
//       });
//     });
//   });
// })

// describe('Hooks', () => {
//   const wrapper = shallow(<Hooks />);
//   it('renders a button with "Toggle" as children', () => {
//     expect(wrapper.find('button')).toHaveLength(1);
//   });
//   it('renders "Toggled" as button children if button is clicked', () => {
//     wrapper.find('button').simulate('click');
//     expect(wrapper.find('button').text()).toEqual('Toggled');
//   });
//   it('renders "Toggle" as button children if button is clicked again', () => {
//     wrapper.find('button').simulate('click');
//     expect(wrapper.find('button').text()).toEqual('Toggle');
//   });
// })