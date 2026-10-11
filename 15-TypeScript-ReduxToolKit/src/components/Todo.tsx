import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import '../css/Todo.css'
import type { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps;

    const dispatch = useDispatch();

    const [editable, setEditable] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>(content);

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id));
    }

    const handleUpdateTodo = () => {
        const payload: TodoType = {
            id,
            content: newTodo
        }
        if (payload.content.trim() === "") {
            alert("Todo Boş Olamaz");
            return;
        }
        dispatch(updateTodo(payload));
        setEditable(false);
    }

    return (
        <div className='todo'>
            {editable == true ? <input value={newTodo} type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} /> : <div>{content}</div>}
            <div>
                <IoIosRemoveCircle className='icons' onClick={handleRemoveTodo} />
                {editable == true ? <FaCheck className='icons' onClick={handleUpdateTodo} /> : <FaEdit className='icons' onClick={() => setEditable(true)} />}
            </div>
        </div>
    )
}

export default Todo