import React, {useState} from 'react'
import { addTodo } from '../Redux/actions'
import { useDispatch } from 'react-redux';


function AddTask() {
    let [name, setName] = useState();
    let dispatch = useDispatch();
    return (
        <div> 
            <input
            onChange={(e)=> setName(e.target.value)}
            value={name} 
            type="text"/>
            <button onClick={()=> {
                dispatch(addTodo(
                    {
                    id: Date.now(),
                    name: name
                    }
                ));
                setName('');
            }}>Add</button>
        </div>
    )
}

export default AddTask
