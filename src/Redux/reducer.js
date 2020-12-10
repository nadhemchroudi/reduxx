import {todos} from "./states"
export let reducer = (state = todos,action) => {
    switch (action.type) {
        case "ADD_TODO":
        return [...state, action.payload]

        case "EDIT_TODO":
        return state.map(el=>el.id === action.payload.id ? {...el, name: action.payload.name} : el)

        case "IS_DONE":
        return state.map(el => el.id === action.payload ? {id:el.id , name:el.name, isDone: !el.isDone} : el );
        
        case "DELETE_TODO":
           return state.filter(todo => todo.id !== action.payload);

        default: 
            return state;
    }
}