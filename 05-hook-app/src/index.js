import React from 'react';
import ReactDOM from 'react-dom';
import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { HookApp } from './HookApp';

ReactDOM.render(
  <React.StrictMode>
    < RealExampleRef />
  </React.StrictMode>,
  document.getElementById('root')
);

// TODO: Clase 12 - useRef