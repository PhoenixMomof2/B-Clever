import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchCurrentKid, getKidStatus, getKidError } from '../slices/kidsSlice'

  const KidsExcerpt = ({ kid }) => {
    const dispatch = useDispatch()
    const kidStatus = useSelector(getKidStatus)
    const error = useSelector(getKidError)

    useEffect(() => {
      if (kidStatus === 'idle'){
        dispatch(fetchCurrentKid())
      }
    }, [kidStatus, dispatch])

    if (kidStatus === 'loading'){
       <p>"Loading...'</p>
    } else if (kidStatus === 'succeeded'){
        return (
        <div className="group relative">
          <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <h2>{kid.name}</h2>
            <img
              src={kid.avatar}
              alt={kid.avatar}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href={kid.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {kid.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{kid.age}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{kid.grade}</p>
          </div>
        </div>
    )
    } else if (kidStatus === 'failed'){
      content = <p>{error}</p>
    }
}

export default KidsExcerpt