import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {

    // Puedo desestructurar el obj
    const [ state , setState ] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    });

    const { counter1, counter2 } = state;

    return (
        <>
            {/* <h1>Counter { counter }</h1> */}
            <h1> Counter1: { counter1 } </h1>
            <h1> Counter2: { counter2 } </h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ () => {
                    setState( {
                        /* Como solo quiero setear el counter1, uso el spread operator,
                         para extraer todas las propiedades ( con los valores que ya poseian ) */
                        ...state,
                        counter1: counter1 + 1
                    } );
                } }
            >
                +1
            </button>
        </>
    )
}
