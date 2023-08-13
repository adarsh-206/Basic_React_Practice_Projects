import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState();

    const addTodo = () => {
        if (task.trim() === '') {
            return
        }

        const newTodo = { id: Date.now(), text: task };
        setTodos([...todos, newTodo]);
        setTask('');
    }

    const removeTodo = (id) => {
        const updatedTodos = todos.filter((todo) => {
            return todo.id !== id
        })
        setTodos(updatedTodos)
    }

    return (
        <div className='center-container'>
            <div className='home'>
                <h1>Todo List App</h1>
                <div>
                    <input type='text' value={task} onChange={(e) => setTask(e.target.value)} />
                    <button onClick={addTodo}>Add</button>
                </div>
                {todos.map((todo, index) => {
                    return (
                        <div className='todos'>
                            <p>{index}</p>
                            <p>{todo.text}</p>
                            <button onClick={() => removeTodo(todo.id)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TodoList