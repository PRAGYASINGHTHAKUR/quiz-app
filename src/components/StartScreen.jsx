import React from 'react';
import logo from '/quizlogo.png';

function StartScreen({ handleStart }) {
  return (
    <div className='start-screen'>
      <h1> welcome to Quiz Game</h1>
      <img src={logo} alt='Logo' className='logo' />
      <button onClick={handleStart} className='start-button'>Start Quiz</button>
    
    </div>
  );
}

export default StartScreen;
