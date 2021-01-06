import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    // const user = {
    //     id:123,
    //     name: 'Maggie',
    //     email: 'muerdomucho@gmail.com'
    // }

    const [user, setUser] = useState({})

    return (
        
        // value = es algo que yo quiero compartir para todos mis componentes hijos.
        <UserContext.Provider value={{
            user: user,
            setUser: setUser
        }}>

            <AppRouter />

        </UserContext.Provider>
    )
}