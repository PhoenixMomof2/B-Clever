import moneyhouse from '../images/moneyhouse.jpg'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteParentAllowance } from '../redux/action/allowanceAction';

const ParentAllowanceCard = ({allowance, thisKid}) => {   
  const dispatch = useDispatch()
  
  const handleDeleteClick = () => {
    dispatch(deleteParentAllowance(allowance.id))
  }

    return (
      <div className="bg-white overflow-hidden shadow-xl rounded-2xl ">       
        <img src={moneyhouse} alt={moneyhouse} className="h-40 w-full object-cover border-transparent"/>
        <div key={allowance.id} className="p-6">
          <h1 className="font-bold text-blue-500 text-3xl border-b">{thisKid.name} earned a ${allowance.balance} allowance!</h1>
          <span className="font-semibold text-red-500 text-sm">{allowance.date}</span>
          <div className="flex gap-2 font-bold items-center text-center py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 font-extrabold text-yellow-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
          </svg>
          <span className="text-yellow-400">Great job!</span> 
          </div>          
          <div className="flex gap-4 py-2">
            <Link className="px-3 bg-purple-500 rounded border-white border-3" to={`/kid_allowances/${allowance.id}/edit`}>Edit</Link>
            <button className="px-3 bg-blue-500 rounded border-white border-3" onClick={handleDeleteClick}>Delete</button>
          </div>
        </div>              
      </div>
    )
  }
  export default ParentAllowanceCard