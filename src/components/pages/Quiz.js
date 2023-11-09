import React, { useState, useEffect } from 'react';
import Question from '../quizcomponents/Question';
import { useLocation } from "react-router-dom";

const Quiz = ({ onAnswer }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    if (data) {
      const { firstSet, secondSet } = data;
      const allQuestions = [...firstSet, ...secondSet];
      setQuestions(allQuestions);
    }
  }, [data]);

  const handleAnswer = (selectedOption) => {
    // Check if there are more questions to display
    if (currentQuestionIndex < questions.length - 1) {
      // Move to the next question
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // Quiz is complete, handle end of quiz scenario
      console.log('Quiz completed');
      // Call the provided `onAnswer` callback with a special flag indicating quiz completion
      onAnswer('quizCompleted');
      return;
    }

    // Call the provided `onAnswer` callback with the current question ID and selected option
    onAnswer(questions[currentQuestionIndex].id, selectedOption);
  };

  return (
    <div className="quiz p-4 flex justify-center items-center">
      <div className="w-full max-w-xl">
        {questions.length > 0 && (
          <div key={questions[currentQuestionIndex].id} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Question {currentQuestionIndex + 1}
            </h2>
            <Question
              question={questions[currentQuestionIndex]}
              onAnswer={handleAnswer}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
