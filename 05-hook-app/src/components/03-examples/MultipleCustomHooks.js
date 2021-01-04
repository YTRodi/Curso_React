import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter( 1 );

    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    
    // CONDICIONAL:
    // null = null
    // !null = true
    // !!null = false
    // !null && 'Un valor' = 'Un valor' // Si tiene valor, regreso el valor
    // !!null && 'Un valor' = false // Si NO tiene valor, es false

    // Alternativa a hacer...
    // if( data ) {}

    // SI EXISTE LA DATA, EXTRAIGO LO QUE HAY EN LA POSICIÓN 0 DE LA DATA.
    const { author, quote } = !!data && data[0];
    
    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading
                ? 
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0"> { quote } </p>
                            <footer className="blockquote-footer"> { author } </footer>
                        </blockquote>
                    )
            }

            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                Next quote
            </button>
            
        </div>
    )
}
