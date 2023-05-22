// rrd imports
import { Form } from "react-router-dom"

// library
import { UserPlusIcon } from "@heroicons/react/24/solid"

//assets 
import illustration from '../images/illustration.jpg'

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          B-Clever<span className="accent"> With $</span>
        </h1>
        <p>
          A math-driven app to expose how clever the munchkins are at budgeting "their" money.
        </p>
        <Form method="post">
          <input 
          type="text" 
          name="userName" 
          required
          placeholder="What should we call you?"
          aria-label="Your name" 
          autoComplete="given-name" />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>My name is ...</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  )
}

export default Intro