import React from 'react';

const Todo = ({todo,deleteTodo}) => {
const todoList = todo.length ? (
    todo.map(todos=>{
        return (
            <div>
                <p className="todoItem" onClick={()=>{deleteTodo(todos.id)}}>- {todos.content}</p>
            </div>
        )
    })
) : <p>no todo item are there</p>
return (
    <div>
        {todoList}
    </div>
)
}
export default Todo;