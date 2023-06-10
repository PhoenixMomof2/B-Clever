import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutCurrentKid } from '../redux/action/kidsAction'
import { logoutCurrentParent } from '../redux/action/parentAuthAction'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => setToggle(!toggle)
  
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { loggedIn, parent_loggedIn } = useSelector(store => store.kidsReducer)
	
	const logout = () => {		
      fetch("/logout", { method: "DELETE" }).then(() => {
			dispatch(logoutCurrentKid()) 
      })
      navigate('/about')
	}

	const logoutParent = () => {		
      fetch("/logout_parent", { method: "DELETE_PARENT" }).then(() => {
			dispatch(logoutCurrentParent()) 
      })
      navigate('/about')
	}

  return (
    <div className="w-full h-[96px] px-8 bg-blue-500 border-b">
      <div className="md:max-w-[1480px] max-w-[600px] w-full h-full m-auto flex justify-between items-center">
      <div className="inline-flex gap-2 py-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-yellow-400 w-12 h-12">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
      </svg><span className="text-white mx-auto font-semibold text-3xl self-center">B-Clever</span>
      </div>

      <div className="hidden md:flex items-center">
        <ul className="flex gap-4 text-white font-bold">
          {loggedIn ? (<li className="rounded-md bg-purple-400 p-2"><Link to="/new_quiz">Earn Allowance</Link></li>) : parent_loggedIn ? (<li className="rounded-md bg-purple-400 p-2"><Link to="/allowances/new">New Allowance</Link></li>) : (<li className="rounded-md bg-purple-400 p-2"><Link to="/">Home</Link></li>)}
          {loggedIn ? (<li className="rounded-md bg-red-400 p-2"><Link to="/me">My Wallet</Link></li>) : parent_loggedIn ? (<li className="rounded-md bg-purple-400 p-2"><Link to="/my_kids_wallet">My Kid's Wallet</Link></li>) : (<li className="rounded-md bg-red-400 p-2"><Link to="/about">About</Link></li>)}
          {loggedIn ? (<li className="rounded-md bg-yellow-400 p-2"><Link to="/wallet">Munchkins</Link></li>) : parent_loggedIn ? (<li className="rounded-md bg-purple-400 p-2"><Link to="/wallet">B-Clever Kids</Link></li>) : (<li className="rounded-md bg-yellow-400 p-2"><Link to="/explore">Explore</Link></li>)}        
        </ul>
      </div>

      <div className="hidden lg:flex gap-4">
      {loggedIn || parent_loggedIn ? (<button onClick={parent_loggedIn ? logoutParent : logout} className="flex justify-center rounded-md items-center bg-transparent px-3 py-2 bg-yellow-200 font-bold">Log Out</button>) : (<Link to="/login" className="flex justify-center rounded-md items-center bg-transparent px-3 py-2 bg-yellow-200 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            Login</Link>)}
        { loggedIn || parent_loggedIn ? null : (<Link to="/signup" className="px-3 py-2 bg-green-300 rounded-md font-semibold">Sign Up</Link>) }
      </div>
      <div className="md:hidden" onClick={handleClick}>
        {toggle ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>)}
      </div>
      </div>
      <div className={ toggle ? 'absolute z-10 p-4 bg-white w-full px-3 md:hidden' : 'hidden' }>
      <ul>
        {loggedIn ? (<li className="p-2 hover:bg-green-200"><Link to="/new_quiz">Earn Allowance</Link></li>) : parent_loggedIn ? (<li className="p-2 hover:bg-green-200"><Link to="/allowances/new">New Allowance</Link></li>) : (<li className="p-2 hover:bg-green-200"><Link to="/">Home</Link></li>)}
        {loggedIn ? (<li className="p-2 hover:bg-green-200"><Link to="/me">My Wallet</Link></li>) : parent_loggedIn ? (<li className="p-2 hover:bg-green-200"><Link to="/my_kids_wallet">My Kid's Wallet</Link></li>) : (<li className="p-2 hover:bg-green-200"><Link to="/about">About</Link></li>)}
        {loggedIn ? (<li className="p-2 hover:bg-green-200"><Link to="/wallet">Munchkins</Link></li>) : parent_loggedIn ? (<li className="p-2 hover:bg-green-200"><Link to="/wallet">B-Clever Kids</Link></li>) : (<li className="p-2 hover:bg-green-200"><Link to="/explore">Explore</Link></li>)}
          <div className="flex my-4 gap-4">
            {loggedIn ? (<Link onClick={logout} to="/about" className="flex justify-center rounded-md items-center bg-transparent px-3 py-2 bg-yellow-200 font-bold">Log Out</Link>) : (<Link to="/login" className="flex justify-center rounded-md items-center bg-transparent px-3 py-2 bg-yellow-200 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            Login</Link>)}
            { loggedIn || parent_loggedIn ? null : (<Link to="/signup" className="px-3 py-2 bg-green-300 rounded-md font-semibold">Sign Up</Link>) }            
          </div>
        </ul>
      </div>
    </div>   
  )
}
export default Navbar

