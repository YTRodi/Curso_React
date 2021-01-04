import React, { useRef } from 'react';
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    // useRef es para matener una referencia mutable.
    const inputRef = useRef();
    
    const handleClick = () => {
        // Cuando toque el botón va a disparar el foco en el input.

        // # 1
        // document.querySelector('input').focus();
        
        // # 2
        // document.querySelector('input').select(); // Le pone foco y lo selecciona.

        // # 3 
        inputRef.current.select();
        console.log(inputRef)
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input 
                ref={ inputRef }
                className="form-control" 
                placeholder="Su nombre" 
            />

            <button onClick={ handleClick } className="btn btn-outline-primary mt-3" >Focus</button>

        </div>
    )
}
