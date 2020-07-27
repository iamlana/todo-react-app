import React from "react"


export function NewTask() {
      return (
            <div>
                  <h1>Todo app</h1>
                  <input type="text" id="new-todo-input" autoComplete="off" />
                  <button type="submit">Add task</button>
            </div>
      )
}
