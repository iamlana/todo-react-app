import React from 'react';
import './App.css';
import { Task } from './Task';
import { AllTasks } from "./AllTasks"
import { ActiveTasks } from './ActiveTasks';
import { CompletedTasks } from './CompletedTasks';


function App(props) {

  const taskList = props.tasks.map(task => <Task />);
  return (
    <div>
      <h1>Todo app</h1>
      <input type="text" id="new-todo-input" autoComplete="off" />
      <button type="submit">Add task</button>
      {taskList}
      <AllTasks />
      <ActiveTasks />
      <CompletedTasks />
    </div>
  );
}

export default App;
