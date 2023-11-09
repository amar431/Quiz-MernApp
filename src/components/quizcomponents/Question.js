import React from 'react';

const Question = ({ question, onAnswer }) => {
    
  return (
    <div className="question-card bg-white p-4 rounded-lg shadow-md">
      <p>{question.text}</p>
      <ul>
        {question.options.map((option, index) => (
          <li
            key={index}
            className="cursor-pointer hover:bg-gray-100 rounded p-2"
            onClick={() => onAnswer(index)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
