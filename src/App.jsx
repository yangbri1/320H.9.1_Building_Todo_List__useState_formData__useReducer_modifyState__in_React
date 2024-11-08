import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// reducer() function called by dispatch to return new updated state using passed action
function reducer(state, action){

}

function App() {
  // call useState() React hook at top level of component to declare state variable -- collect form data
  const [task, setTask] = useState({
    // initial placeholders
    "id": 1,
    "title": "do the laundry",
    "completed": false,
  });

  // state of
  const [state, dispatch] = useReducer(reducer)

  return (
    
    <>
      <h1>Create Todo List</h1>
      <form action=""></form>
      {/* <label> wrapper around <input> auto focus to input when label is clicked  */}
      {/* Aside: "name" attribute provides */}
      <label><b>Task: </b>
        <input type="text" placeholder="Add task" name="task"/>
        <input type="submit" />
      </label>

      <br />

      <label>
        <input type="checkbox" defaultChecked={true} name="mockup" />
        Create Mockup
      </label>

      <br />

      <label>
        <input type="checkbox" name="static_layout" />
        Create Static Layout
      </label>

      <br />
      
      {/* label directs to "interactivity" id -- equivalent to wrapping ex. above*/}
      <label for="interactivity"></label>
        <input type="checkbox" name="interactivity" />
        <input type="text" defaultValue={"Add interactivity"} name="interactivity" />
      
      
    </>

  )
}

export default App
