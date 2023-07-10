import React, { useState, useRef, useEffect, useCallback } from "react"
import timer_text from '../images/timer_text.png'
import { addAllowance } from '../redux/action/allowanceAction'
import { addResource, updateResourceCollection } from "../context/Globals"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Timer = () => {
  // debugger
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentKid = useSelector(store => store.kidsReducer.currentKid)

  const [timeLeft, setTimeLeft] = useState(20)
  const timeLeftRef = useRef(15)
  const intervalIdRef = useRef(null)
  const [intervalId, setIntervalId] = useState(null)

  const [score, setScore] = useState(0)
  const scoreRef = useRef(0)

  const indexRef = useRef(0)
  const [idx, setIdx] = useState(0)

  const formatTime = (timeLeft) => {
    let minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0')
    let seconds = Math.floor(timeLeft % 60).toString().padStart(2, '0')
    return { minutes, seconds }
  }

  const countdown = useCallback(() => {
    const newBalance = scoreRef.current * 1.50
    if (timeLeftRef.current > 0) {
      setTimeLeft(timeLeft => timeLeft - 1)
    } else if (timeLeftRef.current === 0) {
      console.log("time's up", `You earned $${newBalance}`)

      const newAllowance = {
        balance: parseFloat(newBalance),
        kid_id: currentKid.id,
        parent_id: currentKid.parent.id
      }

      console.log(newAllowance, "newAllowance")
      const updatedAllowances = addResource(currentKid.allowances, newAllowance)
      const updatedKid = updateResourceCollection(currentKid, "allowances", updatedAllowances)
      console.log(updatedKid, "updatedKid")
      dispatch(addAllowance(newAllowance, navigate))

      setTimeLeft(0)
      clearInterval(intervalIdRef.current)
    }
    formatTime(timeLeftRef.current)
  }, [currentKid, navigate, dispatch]);

  useEffect(() => {
    timeLeftRef.current = timeLeft
    intervalIdRef.current = intervalId
    indexRef.current = idx
    scoreRef.current = score
  }, [timeLeft, intervalId, idx, score])

  useEffect(() => {
    const countdownInterval = setInterval(countdown, 1000)

    return () => clearInterval(countdownInterval)
  }, [currentKid, countdown])

  return (
    <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
      <div className="animate-spin-slow">
        <img
          priority="true"
          src={timer_text}
          alt="timer_text"
          className="w-40 h-40 animate-spin-slow"
        />
      </div>
      <div className="flex items-center justify-center absolute text-blue-500 bg-red-300 w-24 h-24 rounded-full font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="inline w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-blue-500">
          {formatTime(timeLeft).minutes} : {formatTime(timeLeft).seconds}
        </span>
      </div>
    </div>
  )
}
export default Timer