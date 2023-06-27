import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addParentAllowance } from '../redux/action/allowanceAction'
import cmlogo from '../images/cmlogo.jpg'
// import Errors from '../errors/Errors'

const NewAllowanceForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { currentParent, kids } = useSelector(store => store.kidsReducer)
  const parent_kid = currentParent.kids[0]
  const thisKid = kids.find(kid => kid.id === parent_kid.id)
  const [balance, setBalance] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newAllowance = {
      balance: balance,
      kid_id: thisKid.id,
      parent_id: currentParent.id
    }
    console.log(newAllowance, "newAllowance")
    dispatch(addParentAllowance(newAllowance, navigate))    
  }
      
return (
  <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8 grid grid-cols-2">
      <div>
        <h2 className="mt-6 text-center text-3xl font-medium tracking-tight text-green-400">Give An Allowance</h2>      
        <img className="object-cover" src={cmlogo} alt={cmlogo}/>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <input type="hidden" name="remember" value="true"/>
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <span id="kid-name" className="text-center relative block w-full rounded-t-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 uppercase text-lg text-white font-bold bg-blue-300">
              {thisKid.name}
            </span>
          </div>
          <div>
            <input id="balance" name="balance" type="text" autoComplete="balance" required className="text-center relative  w-full  border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Allowance" defaultValue={balance} onChange={(e) => setBalance(e.target.value)}/>
          </div>    
        <div>
          <button type="submit" className="gap-4 group relative flex w-full justify-center rounded-b-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <span className="flex items-center pl-3 mr-2 gap-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>GIVE
            </span>
          </button>
        </div>
        </div>
        {/* <Errors /> */}
      </form>
    </div>
  </div>
  )
}
export default NewAllowanceForm