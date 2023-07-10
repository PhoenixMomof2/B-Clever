import React from 'react'
import Score from './Score';
import { QuizQuestion } from './QuizQuestion';

const QuizContainer = () => {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="items-center">          
        <Score />             
      </div>
      <div>
        <div className="col-span-2 text-center">
          <QuizQuestion />
        </div>            
      </div>
    </div>
  );
};
export default QuizContainer