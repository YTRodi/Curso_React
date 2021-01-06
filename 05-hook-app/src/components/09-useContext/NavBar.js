import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                
                <Link className="navbar-brand" to="./">useContext</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav text-center">
                        <NavLink exact activeClassName="active" className="nav-link" to="./">Home</NavLink>
                        <NavLink exact activeClassName="active" className="nav-link" to="./about">About</NavLink>
                        <NavLink exact activeClassName="active" className="nav-link" to="./login">Login</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

/**
 * La diferencia entre Link y NavLink es que al NavLink puede establecer una clase
 * si el url coincide con el path.
 */