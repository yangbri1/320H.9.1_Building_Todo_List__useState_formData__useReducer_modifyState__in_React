// import ACTION array
import { ACTION } from "../utilities/reducerActions.mjs"

// create functional component Todo() 
export default function Todo({ task, dispatch }){
    return(
        <>  
            {/* apply ternary operator for if todo.complete status is true ... yield green, otw yield red */}
            <span style={{ color: task.complete ?  "rgb(0,250,154)" : "rgb(255,0,40)" }}>
                {task.title} {" "}
            </span>
            <button 
                onClick={() => 
                    dispatch({ type: ACTION.TOGGLETASK, payload: { id: task.id}})}
                    
            >Toggle</button>

            <button
                onClick={() => 
                    dispatch({ type: ACTION.REMOVETASK, payload: { id: task.id}})}
                
            >Delete
            </button>
            <br />
        </>
    )
}