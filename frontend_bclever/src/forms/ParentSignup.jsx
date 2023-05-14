import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cmlogo from '../images/cmlogo.jpg'
import { useDispatch } from "react-redux"
import { loginCurrentParent, signupParent } from '../redux/action/parentAuthAction';
import { clearErrors } from '../redux/action/errorsAction'
import Errors from '../errors/Errors'

const ParentSignup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [state, setState] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
       
  function handleSubmit(e) {
    e.preventDefault()
    const parent = {
      name, age, state, password, passwordConfirmation
    }
      dispatch(signupParent(parent))
      dispatch(loginCurrentParent({name, password}, navigate))
      console.log("login clicked")    
  }

  useEffect(() => {
      return () => {
        dispatch(clearErrors())
        console.log("parent signup clicked")    
      };
    }, [dispatch]);
      
return (

<div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src={cmlogo} alt={cmlogo}/>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign Up</h2>      
    </div>
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <input type="hidden" name="remember" value="true"/>
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label htmlFor="Name" className="sr-only">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" required className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="Age" className="sr-only">Age</label>
          <input id="age" name="age" type="text" autoComplete="age" required className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)}/>
        </div>        
        <div>
          <label htmlFor="State" className="sr-only">State</label>
          <input id="state" name="state" type="text" autoComplete="state" required className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="State" value={state} onChange={(e) => setState(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password" autoComplete="current-password" required className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password" value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="Password_Confirmation" className="sr-only">Password Confirmation</label>
          <input id="password-confirmation" name="password-confirmation" type="text" autoComplete="password-confirmation" required className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password Confirmation" value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}/>
        </div>        
      </div>
      <div>
        <button type="submit" className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
            </svg>
          </span>
          Signup
        </button>
      </div>
      <Errors />
    </form>
  </div>
</div>
  )
}

export default ParentSignup