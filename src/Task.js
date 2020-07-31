import React from 'react'

export function Task(props) {

    return (
        <li>
            <input
                id={props.id}
                type="checkbox"
                defaultChecked={props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)}/>
            {props.name}
            <button onClick={() => props.deleteTask(props.id)}>Delete</button>
        </li>
    )
}

