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
                    dispatch({ type: ACTION.TOGGLETASK, payload: { id: task.id}})}
                    
            >Toggle</button>
            if(task.complete == true){
                {/* Delete button functionality */}
                <button
                
                onClick={() => 
                    dispatch({ type: ACTION.REMOVETASK, payload: { id: task.id}})}
                
                >Delete
                </button>
            }
            
            {/* Edit button functionality */}
            <button
                onClick={() => 
                    dispatch({ type: ACTION.REMOVETASK, payload: { id: task.id}})}
                
            >Edit
            </button>
            <br />
        </>
    )
}