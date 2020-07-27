import React from "react"
import { Task } from "./Task"

export function CompletedTasks() {
    return (
        <div  className="hidden-list">
            <button>Complited</button>
            <Task name="Kiss"  completed={true} id="third"/>
        </div>
    )
}
