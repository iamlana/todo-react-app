import React from 'react'
import { Task } from "./Task"
import { FilterButton } from './FilterButton'

export function AllTasks() {

    return (
        <div>
            <FilterButton/>
            <Task name="Love" completed={false} id="first"/>
        </div>
    )
}