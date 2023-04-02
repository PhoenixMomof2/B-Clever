import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { selectAllKids, getKidsStatus, getKidsError, fetchKids, useGetAllKidsQuery } from '../slices/kidsSlice'
import KidsExcerpt from '../pages/KidsExcerpt'

const KidsList = () => {
  const dispatch = useDispatch()
  const { data: kids } = useGetAllKidsQuery()
  const kidsStatus = useSelector(getKidsStatus)
  const error = useSelector(getKidsError)

  useEffect(() => {
    if (kidsStatus === 'idle'){
      dispatch(fetchKids())
    }
  }, [kidsStatus, dispatch])

  let content;
  if (kidsStatus === 'loading'){
      content = <p>"Loading...'</p>
  } else if (kidsStatus === 'succeeded'){
      content = kids.map(kid => <KidsExcerpt key={kid.id} kid={kid} />)
  } else if (kidsStatus === 'failed'){
      content = <p>{error}</p>
  }
  return (
    <main>
        <h1>Kids List</h1>
        {content}
    </main>
)
}

export default KidsList