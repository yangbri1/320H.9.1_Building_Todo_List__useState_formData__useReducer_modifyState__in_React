/* centralized ALL logic now in reducer() --- instead of having separate state handling logic fns
"action" is always an obj we take it (type: addTask, deleteTask, etc.) */

// import useImmerReducer() hook from use-immer package -- sacrifice a little performance for state to be "mutable" allow array/obj mutations
import { useImmerReducer } from 'use-immer';

// import reducer function actions
import { ACTION } from "./reducerActions.mjs";

// reducer() function called by dispatch to return new updated state using passed action
export function taskReducer(todos, action){
    switch(action.type){
      case ACTION.ADDTASK:
        // using spread operator to create a copy of previous todo list (both objs, arrays are immutable in state)
        // along with a newly added todo to an array
        /* NOTE: PAYLOAD IS ALWAYS A PROPERTY OF THE ACTION OBJ 
        --- use dot notation to access payload & pass in "title" from input form */
        return [ newTask(action.payload.title), ...todos];
        // if(title === ""){
        //   return todos;
        // }

      case ACTION.TOGGLETASK:
        // traverse through todos list for each tasks & create a copy under function/conditions
        return(todos.map((task) => {
          // if task's id is the same as current id
          if(task.id === action.payload.id){
            // return copy of new task obj now w/ "complete" status negated 
            return({ ...task, complete: !task.complete });
          }
          // otw yield task itself w/o any changes
          else{
            return task;
          }  
        }));
      case ACTION.REMOVETASK:
        // goes through todos list & create a new copy where ...
        return(todos.filter((task) => 
          /*NOTE TO SELF: Habitually tempted to put up squiggly brackets up here to contain 
          DON'T else filter will encapsulate ALL tasks at hand (delete all when pressed) */
          // if task's id DN equal to task payload id, keep it --- otw remove
          task.id !== action.payload.id
        ));

      case ACTION.EDITTASK:
        return
  
      // default action if neither of the actions above are invoked
      default:
        // return state
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