

export function addTodo (todo) {
    return {
        type: "ADD_TODO", 
        payload: todo,
    }
}
export function editTodo (todo) {
    return {
        type: "EDIT_TODO", 
        payload: todo,
    }
}
export function isDone (todoId) {
    return {
        type: "IS_DONE", 
        payload: todoId,
    }
}
export function deleteTodo (todoId) {
    return {
        type: "DELETE_TODO", 
        payload: todoId,
    }
}
