import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginPage = () => {

    const { setUser } = useContext(UserContext);

    const userDefault = {
        id:123,
        name: 'Maggie',
        email: 'muerdomucho@gmail.com'
    }

    return (
        <div>
            <h1>Login Page</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ () => setUser( userDefault ) }
            >
                Login
            </button>
        </div>
    )
}
