// import ACTION array
import { ACTION } from "../utilities/reducerActions.mjs"

// create functional component Todo() 
export default function TodoList({ task, dispatch }){
    return(
        <>  
            {/* <label> wrapper around <input> form auto focus to input when label is clicked  */}
            {/* Note: "for" attribute refers to <input>'s id property & provides accessibility for screen readers  */}
            {/* https://stackoverflow.com/questions/11992026/is-it-better-to-wrap-the-label-tag-around-a-form-item-or-use-the-for-attribute#:~:text=For%20what%20it%27s%20worth%2C%20you%20should%20always%20use,an%20element.%20At%20any%20rate%2C%20it%27s%20good%20practice. */}
            {/* Note: "name" attribute used when sending data in form submission ... (could act as an identifier too like "id")*/}
            {/* https://stackoverflow.com/questions/1397592/difference-between-id-and-name-attributes-in-html */}
            {/* <label for="checkbox_id"> */}

                {/* list of React <input> form props (camelCase): https://react.dev/reference/react-dom/components/input */}
                {/* Note: "defaultChecked" input props should by default by "false" as set in newTask() helper fn for unfinished tasks,
                here just dynamically passing it via task.complete */}
                {/* <input type="checkbox" name="task" id="checkbox_id" defaultChecked={task.complete} onchange={"document.getElementById('delete_btn').disabled = !this.checked;"} /> */}
              
            {/* </label> */}

            <label for="checkbox_id">

                {/* list of React <input> form props (camelCase): https://react.dev/reference/react-dom/components/input */}
                {/* Note: "defaultChecked" input props should by default by "false" as set in newTask() helper fn for unfinished tasks,
                here just dynamically passing it via task.complete */}
                <input type="checkbox" name="task" id="checkbox_id" defaultChecked={task.complete} 
                    onClick={() => 
                        // dispatch() sole purpose is to invoke taskReducer() function for computation of specific behavior for particular action
                        dispatch({ type: ACTION.TOGGLETASK, payload: { id: task.id}})}/>
                
            </label>
            
            {/* utilize ternary operator conditional styling for when todo.complete status is true ... yield green, otw yield red */}
            <span style={{ color: task.complete ?  "rgb(0,250,154)" : "rgb(255,0,40)" }}>
                {task.title} {" "}
            </span>
            {/* Toggle button to either  */}
            <button 
                onClick={() => 
                    // dispatch() sole purpose is to invoke taskReducer() function for computation of specific behavior for particular action
                    dispatch({ type: ACTION.TOGGLETASK, payload: { id: task.id}})}
                    
            >Toggle</button>
            
            {/* Delete button functionality */}
            <label>
                <input type="submit" id="delete_btn" value="Delete"
                    onClick={() => 
                        dispatch({ type: ACTION.REMOVETASK, payload: { id: task.id}})} 
                    // https://www.geeksforgeeks.org/how-to-disable-a-button-in-reactjs/
                    // Aside: DN know "disabled" could be written this way 
                    // ternary operator to conditionally enable "Delete" functionality when task's complete status is true
                    // Notice: "Delete" button availability depends on "Toggle" (green -- task.complete == true, red -- task.complete == false)
                    disabled={task.complete ? false : true}
                />
            </label>
            
            {/* <button
            
                onClick={() => 
                    dispatch({ type: ACTION.REMOVETASK, payload: { id: task.id}})}
                
            >Delete
            </button> */}
            {/* Edit button functionality */}
            <button
                onClick={() => 
                    dispatch({ type: ACTION.REMOVETASK, payload: { id: task.id}})}

                // disabled={task.complete ? false : true}
                
            >Edit
            </button>
            <br />
        </>
    )
}