import React from "react"
import { Task } from "./Task"
import { FilterButton } from "./FilterButton"

export function CompletedTasks() {
    return (
        <div  className="hidden-list">
            <FilterButton />
            <Task name="Kiss"  completed={true} id="third"/>
        </div>
    )
}
