import { useNavigate, Link } from 'react-router-dom'
// import CMLOGO_withName from '../images/CMLOGO_withName.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { logoutCurrentKid } from '../redux/action/authAction'

const Navbar = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const {loggedIn, currentKid} = useSelector(store => store.authReducer)
	
	const logout = (e) => {
			e.preventDefault()
			dispatch(logoutCurrentKid(currentKid, navigate))
			console.log("You are now logged out.")    
	}
	
  return (		
			<nav aria-label="menu nav" className="bg-blue-600 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
				<div className="flex flex-wrap items-center">
					<div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
						<Link to="/kids" aria-label="Home">
								<span className="text-xl pl-2"><i className="em em-grinning"></i> B-CLEVER</span>
						</Link>
						<ul className="list-reset flex md:justify-end flex-1 md:flex-none items-center">
							<li className="flex-1 md:flex-none md:mr-3">
								<div className="relative inline-block">
									<span className="pr-2"><i className="em em-robot_face"></i></span> Hi, {currentKid.name}! 								
								</div>
							</li>
							<li className="flex-1 md:flex-none md:mr-3">
									<Link className="inline-block py-2 px-4 text-white no-underline" to="/wallet">My Wallet</Link>
							</li>
							<li className="flex-1 md:flex-none md:mr-3">
									<Link className="inline-block py-2 px-4 text-white no-underline" to="/me">Profile</Link>
							</li>
							<li className="flex-1 md:flex-none md:mr-3">
									<Link className="inline-block text-white no-underline hover:text-red-600 hover:text-underline py-2 px-4" to="/set_quiz">Earn Allowance</Link>
							</li>
							<li className="flex-1 md:flex-none md:mr-3">
							{!loggedIn ?
											(<Link to="/login" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block" ><i className="fas fa-sign-out-alt fa-fw"></i> Login</Link>) :
										(<Link to="/home" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block" onClick={logout}><i className="fas fa-sign-out-alt fa-fw"></i> Log Out</Link>)}
							</li>
						</ul>
					</div>
				</div>
			</nav>	
		)
	}    
	export default Navbar