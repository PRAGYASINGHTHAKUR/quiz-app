import React from 'react';

function Question({ question, handleAnswerOptionClick }) {
  return (
    <div className='question-section'>
      <div className='question-text'>{question.questionText}</div>
      <div className='answer-section'>
        {question.answerOptions.map((answerOption, index) => (
          <button 
            key={index} 
            onClick={() => handleAnswerOptionClick(answerOption === question.correctAnswer)}>
            {`${index + 1}. ${answerOption}`}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question ;