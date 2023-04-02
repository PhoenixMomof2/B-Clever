import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentKid } from '../slices/authKidSlice'

export const useAuth = () => {
  const kid = useSelector(selectCurrentKid)

  return useMemo(() => ({ kid }), [kid])
}