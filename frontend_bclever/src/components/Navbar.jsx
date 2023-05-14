import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import CMLOGO_withName from '../images/CMLOGO_withName.jpg'
// import nakia from '../images/nakia.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { logoutCurrentKid } from '../redux/action/authAction'
// import ParentNavbar from '../layouts/ParentNavbar'
// import Home from '../pages/Home'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => setToggle(!toggle)
  
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { currentKid } = useSelector(store => store.authReducer)
	// const { parentLoggedIn } = useSelector(store => store.parentAuthReducer)
	
	const logout = (e) => {
			e.preventDefault()
			dispatch(logoutCurrentKid(currentKid, navigate)) 
	}

  return (
    <div className="w-full h-[86px] px-6 bg-blue-500 border-b">
      <div className="md:max-w-[1480px] max-w-[600px] w-full h-full m-auto flex justify-between items-center">
      <img className="w-20 h-20" src={CMLOGO_withName} alt="B-Clever"/>
      <div className="hidden md:flex items-center">
        <ul className="flex gap-4 text-white">
          <li>Home</li>
          <li>About</li>
          <li>Explore</li>
        </ul>
      </div>

      <div className="hidden lg:flex gap-4">
      <button className="flex justify-between rounded-md items-center bg-transparent px-3 bg-yellow-200 font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
        Login</button>
        <button className="px-3 py-2 bg-green-300 rounded-md font-semibold">Sign Up</button>
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
      <div className={ toggle ? '' : 'hidden' }>
      <ul>
          <li>Home</li>
          <li>About</li>
          <li>Explore</li>
        </ul>
      </div>
    </div>
    // <Disclosure as="nav" className="bg-blue-600">
    //   {({ open }) => (
    //     <>
    //       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    //         <div className="relative flex h-16 items-center justify-between">
    //           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //             {/* Mobile menu button*/}
    //             <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    //               <span className="sr-only">Open main menu</span>
    //               {open ? (
    //                 <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
    //               ) : (
    //                 <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
    //               )}
    //             </Disclosure.Button>
    //           </div>
    //           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //             <div className="flex flex-shrink-0 items-center">
    //               <img
    //                 className="hidden h-8 w-auto lg:block"
    //                 src={CMLOGO_withName}
    //                 alt="B-Clever"
    //               />
    //             </div>
    //             <div className="hidden sm:ml-6 sm:block">
    //               <div className="flex space-x-4">
    //                 {navigation.map((item) => (
    //                   <Link
    //                     key={item.name}
    //                     to={item.to}
    //                     className={classNames(
    //                       item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
    //                       'rounded-md px-3 py-2 text-sm font-medium'
    //                     )}
    //                     aria-current={item.current ? 'page' : undefined}
    //                   >
    //                     {item.name}
    //                   </Link>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                

    //             {/* Profile dropdown */}
    //             <Menu as="div" className="relative ml-3">
    //               <div>
    //                 <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
    //                   <span className="sr-only">Open user menu</span>
    //                   <img
    //                     className="h-8 w-8 rounded-full"
    //                     src={nakia}
    //                     alt=""
    //                   />
    //                 </Menu.Button>
    //               </div>
    //               <Transition
    //                 as={Fragment}
    //                 enter="transition ease-out duration-100"
    //                 enterFrom="transform opacity-0 scale-95"
    //                 enterTo="transform opacity-100 scale-100"
    //                 leave="transition ease-in duration-75"
    //                 leaveFrom="transform opacity-100 scale-100"
    //                 leaveTo="transform opacity-0 scale-95"
    //               >
    //                 <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    //                   <Menu.Item>
    //                     {({ active }) => (
    //                       <Link
    //                         to="/wallet"
    //                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
    //                       >
    //                         B-Clever Wallets
    //                       </Link>
    //                     )}
    //                   </Menu.Item>
    //                   <Menu.Item>
    //                     {({ active }) => (
    //                       <Link
    //                         to="/new_quiz"
    //                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
    //                       >
    //                         Earn Allowance
    //                       </Link>
    //                     )}
    //                   </Menu.Item>
    //                   <Menu.Item>
    //                     {({ active }) => (
    //                       <Link
		// 											onClick={logout}
    //                         to="/logout"
    //                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
    //                       >
    //                         Log out
    //                       </Link>
    //                     )}
    //                   </Menu.Item>
    //                 </Menu.Items>
    //               </Transition>
    //             </Menu>
    //           </div>
    //         </div>
    //       </div>

    //       <Disclosure.Panel className="sm:hidden">
    //         <div className="space-y-1 px-2 pb-3 pt-2">
    //           {navigation.map((item) => (
    //             <Disclosure.Button
    //               key={item.name}
    //               as="a"
    //               to={item.to}
    //               className={classNames(
    //                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
    //                 'block rounded-md px-3 py-2 text-base font-medium'
    //               )}
    //               aria-current={item.current ? 'page' : undefined}
    //             >
    //               {item.name}
    //             </Disclosure.Button>
    //           ))}
    //         </div>
    //       </Disclosure.Panel>
    //     </>
    //   )}
    // </Disclosure>
  )
}
export default Navbar
	// create a conditional logout for parent or kid
	
  // return (	
	// 	<>
	// 	{ loggedIn ? (
	// 		
	// 					{/* <div className="text-right z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg focus:outline-none"> */}
	// 						<ul className="list-reset flex lg:justify-items-end flex-1 md:flex-none items-center">
	// 							<li className="flex-1 md:flex-none md:mr-3">
	// 								<Link to="/signup" aria-label="Home"> Signup</Link>
	// 							</li>
	// 							<li className="flex-1 md:flex-none md:mr-3">
	// 								<Link to="/login" aria-label="Home"> Login</Link>
	// 							</li>
	// 						</ul>
	// 					{/* </div> */}
	// 					{ loggedIn ? (
	// 					<ul className="list-reset flex md:justify-items-end flex-1 md:flex-none items-center">
	// 						<li className="flex-1 md:flex-none md:mr-3">
	// 							<div className="relative inline-block">
	// 								<span className="pr-2"><i className="em em-robot_face"></i></span> Hi, { loggedIn ? currentKid.name : "Clever Munchkin" }! 								
	// 							</div>
	// 						</li>

	// 						<li className="flex-1 md:flex-none md:mr-3">
	// 								<Link className="inline-block py-2 px-4 text-white no-underline" to="/wallet">My Wallet</Link>
	// 						</li>
	// 						<li className="flex-1 md:flex-none md:mr-3">
	// 								<Link className="inline-block py-2 px-4 text-white no-underline" to="/me">Profile</Link>
	// 						</li>
	// 						<li className="flex-1 md:flex-none md:mr-3">
	// 								<Link className="inline-block text-white no-underline hover:text-red-600 hover:text-underline py-2 px-4" to="/new_quiz">Earn Allowance</Link>
	// 						</li>
	// 						<li className="flex-1 md:flex-none md:mr-3">
	// 							{ loggedIn ? (<Link to="/home" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block" onClick={logout}><i className="fas fa-sign-out-alt fa-fw"></i> Log Out</Link>	
	// 							) : 
	// 							(<Link to="/login" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block" ><i className="fas fa-sign-out-alt fa-fw"></i> Login</Link>)
	// 							 }
	// 						</li>
	// 					</ul>) : null }
	// 					{parentLoggedIn ? <ParentNavbar /> : null}
	// 				</div>
	// 			</div>
	// 		</nav>			 
	// 	) : (<Home />)}
	// 	</>)
	// }    
	// export default Navbar	