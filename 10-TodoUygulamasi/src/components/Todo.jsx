import React, { useState } from 'react'
import { IoMdRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import '../App.css'

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
    const { id, content } = todo;

    const [editable, SetEditable] = useState(true);
    const [updatetodo, SetUpdatetodo] = useState(content);


    const removeTodo = () => {
        onRemoveTodo(id);
    }

    const newTodo = () => {
        const request = {
            id: id,
            content: updatetodo
        }
        onUpdateTodo(request);
        SetEditable(true);
        alert("Todo güncellendi");
    }


    return (
        <div className='todoList'>
            <div>
                {
                    editable ? content : <input type="text" className='todo-input' value={updatetodo} onChange={(e) => { SetUpdatetodo(e.target.value) }} style={{ width: '380px' }} />
                }
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <IoMdRemoveCircle className='todo-icons' onClick={removeTodo} />
                {
                    editable ? <FaEdit className='todo-icons' onClick={() => { SetEditable(false) }} /> : <FaCheck className='todo-icons' onClick={newTodo} />
                }


            </div>
        </div>
    )
}

export default Todo