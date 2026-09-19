import React, { useState } from 'react'
import '../App.css'

function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState('');

    const clearInput = () => {
        setNewTodo('');
    }

    const createTodo = () => {
        if (!newTodo.trim()) {
            alert("Todo giriniz");
            return;
        }

        const request = {
            id: Math.floor(Math.random() * 999999999),
            content: newTodo
        }

        onCreateTodo(request)
        clearInput();
    }

    return (
        <div className='todo-create'>
            <input type="text" placeholder='Todo giriniz' className='todo-input' value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} />
            <button className='todo-create-button' onClick={createTodo}>Todo Oluştur</button>
        </div>
    )
}

export default TodoCreate