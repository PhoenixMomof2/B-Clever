import React, { useState, useRef } from 'react'
import { useAnimate, stagger } from "framer-motion"
import countdown from './Timer'

const StartButton = () => {
  const randomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const intervalIdRef = useRef(null)
  const [intervalId, setIntervalId] = useState(null)
  const [started, setStarted] = useState(false)
  const [scope, animate] = useAnimate() 

  const startQuiz = () => {
    const sparkles = Array.from({ length: 20 });
    const sparklesAnimation = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: randomNumberBetween(-100, 100),
        y: randomNumberBetween(-100, 100),
        scale: randomNumberBetween(1.5, 2.5),
        opacity: 1,
      },
      {
        duration: 0.4,
        at: "<",
      },
    ]);

    const sparklesFadeOut = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 0.3,
        at: "<",
      },
    ]);

    const sparklesReset = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: 0,
        y: 0,
      },
      {
        duration: 0.000001,
      },
    ]);

    animate([
      ...sparklesReset,
      [".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
      ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
      ["button", { scale: 1 }, { duration: 0.1 }],
      ...sparklesAnimation,
      [".letter", { y: 0 }, { duration: 0.000001 }],
      ...sparklesFadeOut,
    ])
  
    const id = setInterval(() => {
      countdown();
    }, 1000);

    setIntervalId(id)
    setStarted(true)
  }    

  // debugger
  return (     
    <div ref={scope}>
      <button id="startButton" className="rounded-full border-2 border-green-500 px-6 py-2 text-2xl text-green-500 transition-colors hover:bg-green-200" onClick={startQuiz}>
        <span className="sr-only">Start</span>
        <span className="h-8 block overflow-hidden" aria-hidden>
          {["S", "t", "a", "r", "t"].map((letter, index) => (
            <span data-letter={letter} 
            className="letter relative inline-block h-8 leading-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]" 
            key={`${letter}-${index}`}>{letter}</span>
          ))}
        </span>
        <span aria-hidden className="absolute inset-0 block pointer-events-none -z-10">
          {Array.from({ length: 20 }).map((_, index) => (
          <svg key={index} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`absolute left-1/2 top-1/2 opacity-0 animate sparkle-${index}`}>
          <path className="fill-green-500"strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
          ))}
        </span>
      </button>
    </div> 
  )
}
export default StartButton