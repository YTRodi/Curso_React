import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ( { category } ) => {
  
    const [images, setImages] = useState([]);

    // Me permite poder ejecutar código de manera condicional, es decir,
    // solamente quiero que se ejecute esa condición cuando el componente es RENDERIZADO por PRIMERA vez.
    // ( Analogía al patrón de diseño Singleton )
    //     1er param = función a ejecutar
    //     2do param = [] de dependencias

    // Si la catergoria cambia entonces se ejecuta de nuevo el useEffect
    useEffect( () => {

        getGifs( category )
            .then( imgs => setImages( imgs ) );

    }, [ category ])

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                <ol>
                    {
                        images.map( img  => (

                            <GifGridItem 
                                key={ img.id }
                                { ...img } // Estoy enviando cada una de las props de las img como una prop independiente.
                                // img={ img } 
                            />

                        ))
                    }
                </ol>
            </div>
        </>
    )
}

export default GifGrid;
