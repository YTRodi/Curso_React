import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
    
    const { state ,increment, decrement, reset }  = useCounter( 100 );


    return (
        <>
            <h1>Counter with Hook: { state } </h1>   
            <hr />

            <section>
                <h2>Notas:</h2>
                Si no ejecuto la arrow function para las funciones de los botones, no me reconocería el parámetro 'factor'.
                <br />
                Porque estaría enviando el <strong>'event'</strong> del click.
                <br />
                Ya que necesitamos enviarle un valor por defecto (o no) a dichas funciones.
                <br />
            </section>
            
            <button onClick={ () => increment( 21 ) } className="btn btn-primary"> + 1 </button>
            <button onClick={ reset } className="btn btn-info">Reset</button>
            <button onClick={ () => decrement( 10 ) } className="btn btn-danger"> - 1 </button>
        </>
    )
}
