import React from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
 } from "react-router-dom";

import { NavBar } from './NavBar';

import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';

export const AppRouter = () => {

    return (

        <Router>
            <div >
                <NavBar />
                
                <div className="container">
                    <Switch>
                        {/* Con la propiedad 'exact' no hace falta poner al final la ruta '/' */}
                        <Route exact path="/" component={ HomePage } />
                        <Route exact path="/about" component={ AboutPage } />
                        <Route exact path="/login" component={ LoginPage } />

                        {/* Default ( 404Component ) */}
                        <Redirect to="/"/>
                        
                    </Switch>
                </div>
            </div>
        </Router>

    )
}
