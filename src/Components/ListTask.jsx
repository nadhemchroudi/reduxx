import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

function ListTask() {
    let todos = useSelector(state => state)
    return (
        <div>
        <h1>Todo List</h1>
        <div>
        {todos.map((todo, index)=>{
            return <Task key={todo.id} todos={todo} index={index}/>
        })}
        </div>
        </div>
    )
}

export default ListTask
