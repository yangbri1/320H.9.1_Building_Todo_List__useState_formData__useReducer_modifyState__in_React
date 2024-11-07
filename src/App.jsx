import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <h1>Create Todo List</h1>
      <form action=""></form>
      {/* <label> wrapper around <input> auto focus to input when label is clicked  */}
      <label><b>Task: </b>
        <input type="text" placeholder="Add task" name="task"/>
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

      <label>
        <input type="checkbox" name="interactivity" />
        <input type="text" defaultValue={"Add interactivity"} name="interactivity" />
      </label>
      
    </>
    
  )
}

export default App
