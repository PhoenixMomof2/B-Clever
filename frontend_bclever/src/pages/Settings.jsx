import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import './Quiz.css'
import End from "../components/End";
import Question from "../components/Question";
import Start from "../components/Start";
import quizData from "../data/quiz.json";

let interval;

const MultiChoiceQuiz = () => {
  const dispatch = useDispatch();
  const { step, answers } = useSelector((state) => state?.quizReducer);
  console.log(step);
  console.log(answers);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);
  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  return (
    <React.Fragment>   
      <div className="min-h-full inline-block">   
        <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">MATH QUIZ</h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              <div className="border-t border-gray-200">
                {step === 1 && <Start />}
                {step === 2 && <Question />}
                {step === 3 && (
                  <End
                    data={quizData.data}
                    time={time}
                    onAnswersCheck={() => setShowModal(true)}
                  />
                )}
              </div> 
            </div>
          </main>   
      </div>   
    </React.Fragment>    
  );
};

export default MultiChoiceQuiz;