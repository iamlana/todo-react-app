import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const DATA = [
  { id: "todo-0", name: "Kiss", completed: true },
  { id: "todo-1", name: "Jump", completed: false },
  { id: "todo-2", name: "drink", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);


