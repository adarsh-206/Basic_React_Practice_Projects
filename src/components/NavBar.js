import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='applist'>
            <Link to="/todolist">TodoList</Link>
            <Link to="/persistentTodoList" >PersistentTodoList</Link>
            <Link to="/watch">Watch</Link>
            <Link to="/stopwatch">StopWatchApp</Link>
        </div>
    )
}

export default NavBar