import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  nextQuiz,
  prevQuiz,
  submitQuiz,
  timeOut,
} from "../redux/action/quizAction";
import quizData from "../data/quiz.json";

const Question = () => {
  const dispatch = useDispatch();
  const { activeQuestion, answers, time } = useSelector(
    (state) => state?.quizReducer
  );
  const [data, setData] = useState(quizData?.data[activeQuestion]);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState("");
  const [timer, setTimer] = useState(time);
  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    } else {
      dispatch(timeOut());
    }
  }, [timer]);
  const radiosWrapper = useRef();
  useEffect(() => {
    setData(quizData?.data[activeQuestion]);
    if (answers[activeQuestion] != undefined) {
      setSelected(answers[activeQuestion].a);
      console.log("RUn once");
    }
  }, [data, activeQuestion]);
  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };
  const handlePrev = () => {
    setError("");
    dispatch(prevQuiz());
  };
  const handleNext = (e) => {
    if (selected === "") {
      return setError("Please select one option!");
    }
    let ans = [...answers];
    ans[activeQuestion] = {
      q: data.question,
      a: selected,
    };
    dispatch(
      nextQuiz({
        answers: ans,
      })
    );
    setSelected("");
    const findCheckedInput =
      radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  };
  const handleSubmit = () => {
    if (selected === "") {
      return setError("Please select one option!");
    }
    dispatch(
      submitQuiz({
        answers: [
          ...answers,
          (answers[activeQuestion] = {
            q: data.question,
            a: selected,
          }),
        ],
        time: time - timer,
      })
    );
  };
  return (
    <div className="questionBox">
      <section className="questionHead">
        <h3>
          Question {activeQuestion + 1}/{quizData?.data.length}
        </h3>
        <h5>{timer}</h5>
      </section>
      <section className="middleBox">
        <div className="question">
          <p>{data?.question}</p>
          {error && <div>{error}</div>}
        </div>
        <div className="option" ref={radiosWrapper}>
          {data?.choices.map((choice, i) => (
            <label
              className={`${choice === selected ? `selected` : `text`}`}
              key={i}
            >
              <input
                type="radio"
                name="answer"
                value={choice}
                onChange={changeHandler}
                checked={choice === selected}
              />
              {choice}
            </label>
          ))}
        </div>
      </section>
      <section className="questionBottom">
        {activeQuestion <= 0 ? null : (
          <button className="button" onClick={handlePrev}>
            Prev
          </button>
        )}

        {activeQuestion + 1 >= quizData?.data.length ? (
          <button className="button nextBtn" onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <button className="button nextBtn" onClick={handleNext}>
            Next
          </button>
        )}
      </section>
    </div>
  );
};

export default Question;

// export default function Example() {
//   return (
//     <div>
//       <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
//         Price
//       </label>
//       <div className="relative mt-2 rounded-md shadow-sm">
//         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//           <span className="text-gray-500 sm:text-sm">$</span>
//         </div>
//         <input
//           type="text"
//           name="price"
//           id="price"
//           className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//           placeholder="0.00"
//         />
//         <div className="absolute inset-y-0 right-0 flex items-center">
//           <label htmlFor="currency" className="sr-only">
//             Currency
//           </label>
//           <select
//             id="currency"
//             name="currency"
//             className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//           >
//             <option>USD</option>
//             <option>CAD</option>
//             <option>EUR</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   )
// }