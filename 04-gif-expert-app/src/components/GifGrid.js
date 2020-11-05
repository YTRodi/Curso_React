import React, { useEffect, useState } from 'react'

const GifGrid = ( { category } ) => {
  
    // Me permite poder ejecutar código de manera condicional, es decir,
    // solamente quiero que se ejecute esa condición cuando el componente es RENDERIZADO por PRIMERA vez.
    // ( Analogía al patrón de diseño Singleton )
    //     1er param = función a ejecutar
    //     2do param = [] de dependencias
    useEffect( () => {

        getGifs();

    }, [])

    // Función para consumir los datos de la Fetch API
    const getGifs = async() => {

        // endpoint
        const url = 'https://api.giphy.com/v1/gifs/search?q=Tanjiro&limit=10&api_key=Nt4ACMs0TBmsydLDNeElO00qxCJaqUTp'; 
        const res = await fetch( url );
        // const data = await res.json();
        const { data } = await res.json();
        
        // No me interesan todos los datos que me proporciona la data, solo algunos por eso mapeo...
        const onlyGifs = data.map( img => {

            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url // images? = Preguntamos que si viene una imagen, vamos a utilizar esta prop
            }
            
            // return { id: img.id, title: img.title, url: img.images?.downsized_medium.url }  // Destructuring
        });

        console.log( onlyGifs );

    }

    return (
        <div>
            <h3>{ category }</h3>
        </div>
    )
}

export default GifGrid;
