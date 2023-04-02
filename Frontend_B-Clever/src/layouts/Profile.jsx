import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { selectCurrentKid, fetchCurrentKid, getKidStatus, getKidError } from '../slices/kidsSlice'
import phoenix from '../images/phoenix.jpg'
 
  const Profile = () => {
    const dispatch = useDispatch()
    const kid = useSelector(selectCurrentKid)
    const kidStatus = useSelector(getKidStatus)
    const error = useSelector(getKidError)

    useEffect(() => {
      if (kidStatus === 'idle'){
        dispatch(fetchCurrentKid())
      }
    }, [kidStatus, dispatch])

    let content;
    if (kidStatus === 'loading'){
        content = <p>"Loading...'</p>
    } else if (kidStatus === 'succeeded'){
      content = <div key={kid.id} className="flex -space-x-2 overflow-hidden">
      <img
        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        src={phoenix}
        alt={phoenix}
      />
      </div>
    } else if (kidStatus === 'failed'){
        content = <p>{error}</p>
    }
}
  
export default Profile