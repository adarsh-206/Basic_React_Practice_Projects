import React from 'react';
import Home from './components/Home';
import PersistantTodoList from './components/PersistantTodoList';
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import StopWatchApp from './components/StopWatchApp';
import Watch from './components/Watch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/persistentTodoList" element={<PersistantTodoList />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/stopwatch" element={<StopWatchApp />} />
      </Routes>
    </Router>
  );
}

export default App;