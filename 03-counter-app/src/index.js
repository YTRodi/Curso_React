import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
import './index.css'; // Importamos estilos.

const divRoot = document.querySelector( '#root' );

ReactDOM.render( <CounterApp value={ 123 } />, divRoot );