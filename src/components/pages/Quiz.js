import React, { useState, useEffect } from 'react';
import Question from '../quizcomponents/Question';
import { useLocation } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { moveToQuestion } from '../../hooks/FetchQuestion'; 

const Quiz = () => {

  const dispatch = useDispatch();
  const state = useSelector(state=>state)
  const [currentIndex, setCurrentIndex] = useState(0);
  
 useEffect(()=>{
  console.log(state)
 }, [state.questions.queue.currentQuestion]);

 const handleMoveToQuestion = async (index) => {
  try {
    await dispatch(moveToQuestion(index));
    setCurrentIndex(index);
  } catch (error) {
    console.log(error);
  }
};

  
const currentQuestion = state.questions.queue.questions?.[currentIndex];

 
return (
  <div className="flex">
    {/* Sidebar */}
    <div className="w-1/4 bg-gray-200 p-4">
      <h1 className="text-xl font-bold mb-4">Question List</h1>
      <ul className="list-none p-0">
        {state.questions.queue.questions &&
          state.questions.queue.questions.map((question, index) => (
            <li
              key={index}
              className={`mb-2 cursor-pointer p-2 bg-white rounded-md shadow-md ${
                index === currentIndex
                  ? 'bg-blue-500 text-white'
                  : '' // Add blue background when question is selected
              }`}
              onClick={() => handleMoveToQuestion(index)}
            >
              {question ? `Question ${index + 1}` : 'Loading...'}
            </li>
          ))}
      </ul>
    </div>

    {/* Main Content */}
    <div className="flex-grow p-4">
      <Question question={currentQuestion} />
    </div>
  </div>
);
};
export default Quiz;