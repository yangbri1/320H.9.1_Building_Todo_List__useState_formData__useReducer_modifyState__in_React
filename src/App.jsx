// import useState() to contain form data, useReducer() hook for complex (nested) change in state
import { useState, useReducer } from 'react'
import './App.css'

// reducer() function called by dispatch to return new updated state using passed action
function reducer(state, action){

}

function App() {
  // call useState() React hook at top level of component to declare state variable -- collect form data
  const [task, setTask] = useState("");

  // state parameter usually refers to given initial value (here it's [])
  // dispatch invokes reducer() function
  // reducer -> reducer() fn to change state
  // initial value of empty array []
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <form>
        <input type="text"  value={task} onChange={e => setTask(e.target.value)}  />
      </form>
    </>
    // <>
    //   <h1>Create Todo List</h1>
    //   <form action=""></form>
    //   {/* <label> wrapper around <input> auto focus to input when label is clicked  */}
    //   {/* Aside: "name" attribute provides */}
    //   <label><b>Task: </b>
    //     <input type="text" placeholder="Add task" name="task"/>
    //     <input type="submit" />
    //   </label>

    //   <br />

    //   <label>
    //     <input type="checkbox" defaultChecked={true} name="mockup" />
    //     Create Mockup
    //   </label>

    //   <br />

    //   <label>
    //     <input type="checkbox" name="static_layout" />
    //     Create Static Layout
    //   </label>

    //   <br />
      
    //   {/* label directs to "interactivity" id -- equivalent to wrapping ex. above*/}
    //   <label for="interactivity"></label>
    //     <input type="checkbox" name="interactivity" />
    //     <input type="text" defaultValue={"Add interactivity"} name="interactivity" />
      
    // </>

  )
}

export default App
