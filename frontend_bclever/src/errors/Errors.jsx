import { useSelector } from "react-redux"

const Errors = () => {
  const err = useSelector(store => store.errorsReducer)
  console.log(err, "err")
  const errorLis = err.errors.map((e, idx) => <li key={idx}>{ e }</li> )
  
  return (
    <ul>
      { errorLis }
    </ul>
  )
}
export default Errors