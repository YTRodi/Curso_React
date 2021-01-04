import React from 'react';
import ReactDOM from 'react-dom';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { HookApp } from './HookApp';

ReactDOM.render(
  <React.StrictMode>
    < SimpleForm />
  </React.StrictMode>,
  document.getElementById('root')
);