import { useEffect, useState } from 'react'

// Utilizando el API de Breaking Bad.

export const useFetch = ( url ) => {
    
    const [state, setState] = useState( { 
        data: null,
        loading: true,
        error: null 
    } );

    // Solo se va a ejecutar cuando cambiemos la url.
    useEffect( () => {

        setState({
            data: null,
            loading: true,
            error: null
        })

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                setState({
                    loading: false,
                    error: false,
                    data
                    // data: data
                })

            })

    }, [ url ] );

    return state;
}
