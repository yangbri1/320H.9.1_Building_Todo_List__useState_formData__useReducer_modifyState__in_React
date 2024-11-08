// import useState() to contain & manipulate data (here we use to contain form data) 
/* useReducer() hook for complex (ex. nested) change in state 
-- "reduce" # of state handling logic functions & consolidate logic */
import { useState, useReducer } from 'react';
// import React functional components
import Todo from './components/Todo.jsx';

import './App.css'


// reducer() function called by dispatch to return new updated state using passed action
/* centralized ALL logic now in reducer() --- instead of having separate state handling logic fns
"action" is always an obj we take it (type: addTask, deleteTask, etc.) */
function reducer(todos, action){
  switch(action.type){
    case ACTION.ADDTASK:
      // using spread operator to create a copy of previous todo list (both objs, arrays are immutable in state)
      // along with a newly added todo to an array
      /* NOTE: PAYLOAD IS ALWAYS A PROPERTY OF THE ACTION OBJ 
      --- use dot notation to access payload & pass in "title" from input form */
      return [...todos, newTask(action.payload.title)];
    case ACTION.TOGGLETASK:
      // traverse through todos list for each tasks & create a copy under function/conditions
      return(todos.map((task) => {
        // if task's id is the same as current id
        if(task.id === action.payload.id){
          // return copy of new task obj now w/ complete status of true -- chore finished
          return({ ...task, complete: true })
        }
        // otw yield task itself w/o any changes
        else{
          return task;
        }  
      }));
    case ACTION.REMOVETASK:
      // goes through todos list & create a new copy where ...
      return(todos.filter((task) => {
        // if task's id DN equal to task payload id -- keep it
        task.id !== action.payload.id
      }));

    // default action if neither of the actions above are invoked
    default:
      return todos;
  }
}

// helper function for creating a new todo task
function newTask(title){
  // "id" -- essential for updating/deleting, set to Date.now() for unique id
  // "title" -- description of task
  // "complete" -- ofc set to false (if adding a new task -- not finished)
  return({ id: Date.now(), title: title, complete: false })
}

// hardcoded ACTION obj -- reduce chances of error 
export const ACTION = {
  ADDTASK: 'addTask',
  TOGGLETASK: 'toggleTask',
  REMOVETASK: 'removeTask',
}

function App() {
  // call useState() React hook at top level of component to declare state variable -- collect form data
  // variable "title" to be updated via form input
  const [title, setTitle] = useState("");

  // state "todos" usually refers to given initial value (here it's [])
  // dispatch invokes reducer() function
  // reducer -> reducer() fn to change state
  // initial value of empty array []
  const [todos, dispatch] = useReducer(reducer, []);

  function handleSubmit(event){
    // prevent default behavior -- refreshng page onSubmit
    event.preventDefault();
    // "dispatch" invokes reducer() function so that it passes in
    // "type" for wanted action,
    // "payload" for any additional values ("title" variable in useState() hook) to calculate state via action
    dispatch({ type: ACTION.ADDTASK, payload: { title: title }});
    setTitle('');  // clears out task after typing input
  }

  console.log(todos);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text"  value={title} onChange={(e) => setTitle(e.target.value)}  />
      </form>

      {todos.map((errand) => {
        return(
          // calling function component
          /*Note: passing dispatch() function (w/ an "action" and payload.id) down to <Todo>
          grants access to dispatch() fn in <Todo /> functional component */
          <Todo key={errand.id} errand={errand} dispatch={dispatch} />
        )
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
