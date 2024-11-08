// import ACTION array
import { ACTION } from "../App.jsx";

// create functional component Todo() 
export default function Todo({ errand, dispatch }){
    return(
        <>  
            {/* apply ternary operator for if todo.complete status is true ... yield green, otw yield red */}
            <span style={{ color: errand.complete ?  "rgb(0,250,154)" : "rgb(255,0,40)" }}>
                {errand.title}
            </span>
            <button onClick={() => dispatch({ type: ACTION.TOGGLETASK, payload: { id: errand.id}})}>Toggle</button>
            <button onClick={() => dispatch({ type: ACTION.REMOVETASK, payload: { id: errand.id}})}>Remove</button>
        </>
    )
}