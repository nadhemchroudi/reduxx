import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, isDone, editTodo } from '../Redux/actions';

function Task({todos, index}) {
    let dispatch = useDispatch();
    let edit=(id)=>{
        let edited=prompt('Edit todo-task')
    dispatch(
        editTodo({id:id, name:edited}))
    }
    return (
        <div>
            <div className="task">
                <span>{index + 1}/ </span>
                <span className={todos.isDone && 'done'}><strong>  {todos.name}</strong></span> <br/>
                <button className={todos.isDone && 'button'} onClick={()=>dispatch(isDone(todos.id))}>Done</button>
                <button onClick={()=>edit(todos.id)}>Edit</button>
                <button onClick={()=>dispatch(deleteTodo(todos.id))}>Delete</button>
                <br/>
            </div>
        </div>
    )
}

export default Task
