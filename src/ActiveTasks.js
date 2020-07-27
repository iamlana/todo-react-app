import React from "react"
import { Task } from "./Task"
import { FilterButton } from "./FilterButton"

export function ActiveTasks(){
    return(
        <div>
            <FilterButton/>
            <Task name="Enjoy" completed={false} id="second"/>
        </div>
    )
}