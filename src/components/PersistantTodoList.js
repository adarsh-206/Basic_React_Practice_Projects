import React, { useEffect, useState } from 'react'

function PersistantTodoList() {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
    const [task, setTask] = useState();

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (task.trim() === '') {
            return
        }

        const newTodo = { id: Date.now(), text: task };
        setTodos([...todos, newTodo]);
        setTask('');
    }

    const removeTodo = (id) => {
        const updatedTodo = todos.filter((todo) => {
            return todo.id !== id
        })
        setTodos(updatedTodo);
    }

    return (
        <div className='persist1'>
            <div className='persist2'>
                <h1>Persistent Todo List App</h1>
                <div>
                    <input type='text' value={task} onChange={(e) => { setTask(e.target.value) }} />
                    <button onClick={addTodo}>Add</button>
                </div>
                {todos.map((todo, index) => {
                    return (
                        <div className="todo">
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

export default PersistantTodoList