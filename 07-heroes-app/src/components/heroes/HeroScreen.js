import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = () => {

    // const params = useParams();
    const { heroeId } = useParams(); // Hook nativo de 'react-router-dom'

    const hero = getHeroesById( heroeId );

    if( !hero ) {
        // Valido una ruta en caso de que ingresen cualquier cosa.
        return <Redirect to="/" />
    }

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

    return (
        <div>
            <h1>Hero Screen</h1>
        </div>
    )
}
