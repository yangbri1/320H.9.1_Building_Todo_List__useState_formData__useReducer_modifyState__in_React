// import ACTION array
import { ACTION } from "../utilities/reducerActions.mjs"

// import useState() hook from React library -- mainly for "Edit" button
import { useState } from "react";

// create functional component TodoList() 
export default function TodoList({ task, dispatch }){

    // use React useState() hook to add state to functional component w/ "editStatus" (current state variable) set to "false" (initial value)
    // later "setEditStatus" setter fn will update value of "editStatus" & React will re-render component w/ updated state
    const [editStatus, setEditStatus] = useState(false);

    // handler function for when button is pressed
    function handleClick(){
        // let edit_status = false;
        // return(!edit_status);
        setEditStatus(!editStatus); // toggle state variable "editStatus"
    }

    return(
        <>  

            {/* <label> wrapper around <input> form auto focus to input when label is clicked  */}
            {/* Note: "for" attribute refers to <input>'s id property & provides accessibility for screen readers  */}
            {/* https://stackoverflow.com/questions/11992026/is-it-better-to-wrap-the-label-tag-around-a-form-item-or-use-the-for-attribute#:~:text=For%20what%20it%27s%20worth%2C%20you%20should%20always%20use,an%20element.%20At%20any%20rate%2C%20it%27s%20good%20practice. */}
            {/* Note: "name" attribute used when sending data in form submission ... (could act as an identifier too like "id")*/}
            {/* https://stackoverflow.com/questions/1397592/difference-between-id-and-name-attributes-in-html */}
            <label for="checkbox_id">
                {/* list of React <input> form props (camelCase): https://react.dev/reference/react-dom/components/input */}
                {/* Note: "defaultChecked" input props should by default by "false" as set in newTask() helper fn for unfinished tasks,
                here just dynamically passing it via task.complete */}
                <input type="checkbox" name="task" id="checkbox_id" defaultChecked={task.complete} 
                    onClick={() => 
                        // dispatch() sole purpose is to invoke taskReducer() function for computation of specific behavior for particular action
                        dispatch({ type: ACTION.TOGGLETASK, payload: { id: task.id}})}
                />   
            </label>
            
            {/* utilize ternary operator conditional styling for when todo.complete status is true ... yield green, otw yield red */}
            <span style={{ color: task.complete ?  "rgb(0,250,154)" : "rgb(255,0,40)" }}>
                {task.title} {" "}
            </span>

            {/* Toggle button functionality -- shows "button" works too --- however it only look for click activation, unlike input form which could look for type=button, submit, checkbox, etc.
             preferences varies: https://stackoverflow.com/questions/7117639/input-type-submit-vs-button-tag-are-they-interchangeable  */}
            <label for="toggle-btn">
                <button id="toggle-btn"
                    onClick={() => 
                        // dispatch() sole purpose is to invoke taskReducer() function for computation of specific behavior for particular action
                        dispatch({ type: ACTION.TOGGLETASK, payload: { id: task.id}})}
                        
                >Toggle</button>
            </label>

            {/* Delete button functionality */}
            <label for="delete-btn">
                <input type="submit" id="delete-btn" value="Delete"
                    onClick={() => 
                        dispatch({ type: ACTION.REMOVETASK, payload: { id: task.id}})} 
                    // https://www.geeksforgeeks.org/how-to-disable-a-button-in-reactjs/
                    // Aside: DN know "disabled" could be written this way 
                    // ternary operator to conditionally enable "Delete" functionality when task's complete status is true
                    // Notice: "Delete" button availability depends on "Toggle" (green -- task.complete == true, red -- task.complete == false)
                    disabled={task.complete ? false : true} // disabled={!task.complete} works too
                    
                />
            </label>
            
            {/* <button
            
                onClick={() => 
                    dispatch({ type: ACTION.REMOVETASK, payload: { id: task.id}})}
                
            >Delete
            </button> */}
            {/* Edit button functionality */}
            <label for="edit-btn">
                <input type="text" id="edit-btn" 
                //value="Save" 
                    onClick={() => 
                        dispatch({ type: ACTION.EDITTASK, payload: { id: task.id}})}
                    defaultValue={`${task.title}`}
                    disabled={!editStatus}
                />
                <button
                    // onClick={() => 
                    //     dispatch({ type: ACTION.EDITTASK, payload: { id: task.id}})}
                    onClick={handleClick}

                    // disabled={task.complete ? false : true}
                    value={"Save"}
                >Edit
                </button>
            </label>
            
            <br />
        </>
    )
}

// function multipleFiring(){
//     dispatch({ type: ACTION.REMOVETASK, payload: { id: task.id}});

// }

// function handleClick(){
//     let edit_status = false;
//     return(!edit_status);
// }