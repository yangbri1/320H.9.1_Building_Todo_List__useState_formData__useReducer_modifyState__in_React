// import ACTION array
import { ACTION } from "../utilities/reducerActions.mjs"

// create functional component Todo() 
export default function Todo({ task, dispatch }){
    return(
        <>  
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
                    // ternary operator to conditionally enable/disable "Delete" functionality based on task's complete status
                    disabled={task.complete ? true : false}
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

                // disabled={task.complete ? true : false}
                
            >Edit
            </button>
            <br />
        </>
    )
}