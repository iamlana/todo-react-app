import React from 'react'
import { Task } from "./Task"

export function AllTasks() {

    return (
        <div>
            <button>All</button>
            <Task name="Love" completed={false} id="first"/>
        </div>
    )
}