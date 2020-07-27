import React from 'react';
import './App.css';
import { Task } from './Task';
import { AllTasks } from "./AllTasks"
import { ActiveTasks } from './ActiveTasks';
import { CompletedTasks } from './CompletedTasks';
import { NewTask } from './NewTask'


function App(props) {

    const taskList = props.tasks.map(task =>
      <Task
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
      />);
    return (
      <div>
        <NewTask/>
        {taskList}
        <AllTasks />
        <ActiveTasks />
        <CompletedTasks />
      </div>
    );
  }

export default App;
