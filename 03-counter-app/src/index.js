import React from "react";
import ReactDOM from "react-dom";
import PrimeraApp from "./PrimeraApp";
import './index.css'; // Importamos estilos.

const divRoot = document.querySelector( '#root' );

// Método render( #1, #2 );
// #1 Etiqueta que quiero mostrar
// #2 Componente donde lo quiero poner
ReactDOM.render( <PrimeraApp />, divRoot );