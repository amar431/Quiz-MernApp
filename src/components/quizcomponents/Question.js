import React, { useState, useEffect } from 'react';
import { useFetchQuestion } from '../../hooks/FetchQuestion';
import {useSelector,useDispatch} from 'react-redux'

const Question = (currentQuestion) => {
  const [{ isLoading, apiData, serverError}] = useFetchQuestion() 
  // const queue = useSelector((state) => state.questions.queue);
  // const trace = useSelector((state) => state.questions.trace);
  // const currentQuestion = queue && queue.questions && queue.questions[trace];
  
  

  useEffect(()=>{
   console.log(currentQuestion)
  },[currentQuestion])

 
  if(isLoading) return <h3 className='text-orange-400'>isLoading</h3>
  if(serverError) return <h3 className='text-red-500'>{serverError.message  || "Unknown Error"}</h3>
  if (!currentQuestion) return <h3 className='text-orange-400'>Loading...</h3>;
  
  // const { text, options } = currentQuestion.question;
  console.log(currentQuestion)
    
  return (
    <div className='max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md my-4'>
      <div className='p-4'>
        <h2 className='text-xl font-bold mb-4'>{currentQuestion?.question?.text}</h2>
        <ul className='list-none p-0'>
          {currentQuestion?.question?.options &&
            currentQuestion.question.options.map((option, index) => (
              <li key={index} className='mb-2'>
                <label className='inline-flex items-center'>
                  <input type='radio' name='options' value={index} />
                  <span className='ml-2'>{option}</span>
                </label>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default React.memo(Question);
