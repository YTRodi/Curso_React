import React, { useState } from 'react'

const GifExpertApp = (  ) => {

    const categoriesDefault = [ 'Kimetsu no Yaiba', 'Shingeki no kyojin', 'Made in abyss' ];

    const [ categories, setCategories ] = useState( categoriesDefault );

    const handleAdd = () => { 
        
        console.log( categories );

        // Con esta función le digo a React que el estado del [] ( categoriesDefault ) cambió y se necesita renderizar de nuevo el componente
        // #1
        setCategories( [ ...categories, 'Naruto' ] );
        // setCategories( [ 'Naruto', ...categories ] );

        // #2
        // 1er param = estado anterior // 2do (retorno del callback) = nuevo estado.
        // setCategories( oldCategories => [ ...oldCategories, 'Naruto' ] ); 

    };

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={ handleAdd }>Agregar</button>

            <ol>
                { 
                    // El key NO PUEDE ser el índice y TIENE QUE SER único.
                    categories.map( category => {
                        return <li key={ category }>
                                    { category }
                               </li>
                    })              
                }
            </ol>
        </>
    )
}

export default GifExpertApp
