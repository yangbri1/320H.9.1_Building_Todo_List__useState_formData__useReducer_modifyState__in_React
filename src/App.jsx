// import useState() to contain & manipulate data (here we use to contain form data) 
/* useReducer() hook for complex (ex. nested) change in state 
-- "reduce" # of state handling logic functions & consolidate logic */
import { useState, useReducer } from 'react';

import { useImmerReducer } from 'use-immer';

// import React functional components
import TodoList from './components/TodoList.jsx';

// introduce necessary utilities modules 
import { taskReducer } from './utilities/reducerFunction.mjs';
import { ACTION } from './utilities/reducerActions.mjs';

// bring in CSS styling
import './App.css'

// root component App()
function App() {
  // call useState() React hook at top level of component to declare state variable -- collect form data
  // variable "title" to be updated via form input
  const [title, setTitle] = useState("");

  // state "todos" usually refers to given initial value (here it's [])
  // dispatch invokes reducer() function
  // reducer -> taskReducer() fn to change state
  // initial value of empty array []
  const [todos, dispatch] = useReducer(taskReducer, []);

  function handleSubmit(event){
    // prevent default behavior -- refreshng page onSubmit
    event.preventDefault();
    // "dispatch" invokes reducer() function so that it passes in
    // "type" for wanted action,
    // "payload" for any additional values ("title" variable in useState() hook) to calculate state via action
    dispatch({ type: ACTION.ADDTASK, payload: { title: title }});
    setTitle('');  // clears out task after typing input
  }
  // technically able to put handleSubmit() into taskReducer(), omitted setTitle & use a button,
  // NavBar for header too? Check crypto lab

  console.log(todos); // displaying results in console

  function enableDelete(){
    // document.getElementById("checkbox_id").checked == 1;

  }

  return (
    <>
      <h1>Create Todo List</h1>
      {/* onSubmit event handler that triggers whenever form data is submitted  */}
      {/* https://stackoverflow.com/questions/23762474/whats-the-difference-between-onclick-and-onsubmit */}
      <form onSubmit={handleSubmit}>
        {/* applied 1) inline styling --- as it has highest precedence compared to 2) internal styling, 3) external styling */}
        <input type="text" placeholder="Add task" value={title} id="search-bar" onChange={(event) => setTitle(event.target.value)} style={{color: "#386641"}} />
        <input type="submit" value="Enter🔍" id="search-btn" />
        {/* onClick event is for when anything is clicked */}
        {/* <input type="button" onClick={handleSubmit} value="Enter" /> */}
      </form>

      <br />

      {/* <label>
        <input type="checkbox" defaultChecked={true} name="mockup" />
        Create Mockup
      </label> */}

      {todos.map((task) => {
        return(
          
          <>
            {/* calling function component */}
            {/* Note: passing dispatch() function (w/ an "action" and payload.id) down to <TodoList>
            grants access to dispatch() fn in <TodoList /> functional component */}
            <TodoList key={task.id} task={task} dispatch={dispatch} />
          </>
          
          
        );
      })}
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
