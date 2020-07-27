import React from "react"
import { Task } from "./Task"

export function ActiveTasks(){
    return(
        <div>
            <button className="hidden-list">Active</button>
            <Task name="Enjoy" completed={false} id="second"/>
        </div>
    )
}