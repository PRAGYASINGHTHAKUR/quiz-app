
import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import './App.css';

const questions = [
  { questionText: 'Which of the following command is used to create react-js-app ?', 
    answerOptions:  ['npx create-react-app appname', 'npm install create-react-app', 'npx install create-react-app -g',
           'install - l create-react-app'],
    correctAnswer:'npx create-react-app appname'
  } ,
  { questionText: 'In React.js which one of the following is used to create a class for Inheritance ?', 
    answerOptions: ['Extends', 'Delete', 'Inherits', 'create'], 
    correctAnswer:'Extends'
  } ,
  { questionText: 'What is the default port number in which the application run ?', 
    answerOptions:  ['3000', '4500', '8000', '2000'],
    correctAnswer:'30000',
  } ,
  { questionText: 'Which of the following valid component return type of React ?',
    answerOptions:  ['1', '3', '2', '7'],
    correctAnswer:'1'
  } ,
  { questionText: 'Which of the following is a way to handle data in React.js ', 
    answerOptions: ['State & props', 'service & components', 'State & service', 'State & components'],
    correctAnswer:'State & props'
  } ,
  { questionText: 'Which of the following is true regarding Babel ?',
    answerOptions:  ['Compiler', 'Transpilar', 'Both of the above', 'None of the above'],
    correctAnswer:'Both of the above'
  } ,
  
];

function App() {
  const [start, setStart] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleStart = () => {
    setStart(true);
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='app'>
      {!start ? (
        <StartScreen handleStart={handleStart} />
      ) : showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <Question 
          question={questions[currentQuestion]} 
        
          handleAnswerOptionClick={handleAnswerOptionClick} 
        />
      )}
    </div>
  );
}

export default App;
