import React from 'react'

export function Task(props) {

    return (
        <li>
            <input
                id={props.id}
                type="checkbox"
                defaultChecked={props.completed} />
            {props.name}
            <button>Edit</button>
            <button>Delete</button>
        </li>
    )
}

