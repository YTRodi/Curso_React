import React from "react";
import ReactDOM from "react-dom";
import PrimeraApp from './PrimeraApp'
// import CounterApp from "./CounterApp";
import './index.css'; // Importamos estilos.

const divRoot = document.querySelector( '#root' );

ReactDOM.render( <PrimeraApp saludo="Ohayo"/>, divRoot );
// ReactDOM.render( <CounterApp value={ 123 } />, divRoot );
