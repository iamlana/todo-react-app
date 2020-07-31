import React, { useState } from "react"


export function NewTask(props) {
const [name, setName] = useState('');

function handleSubmit(e) {
      e.preventDefault();
      props.addTask(name);
      setName('')
}
function handleChange(e) {
      setName(e.target.value);
}


      return (
            <div>
                  <form onSubmit={handleSubmit}>
                        <h1>Todo app</h1>
                        <input
                              type="text"
                              id="new-todo-input"
                              autoComplete="off"
                              value={name}
                              onChange={handleChange} />
                        <button type="submit">Add task</button>
                  </form>
            </div>
      )
}


