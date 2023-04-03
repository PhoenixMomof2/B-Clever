import { useSelector } from "react-redux"

const Errors = () => {
  const errors = useSelector(store => store.errorsReducer)
  const errorLis = errors.map((error, idx) => <li key={idx}>{ error }</li> )
  return (
    <ul>
      { errorLis }
    </ul>
  )
}
export default Errors