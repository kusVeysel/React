import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import '../css/Todo.css'
import type { TodoType } from '../types/Types';

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps ;

    return (
        <div className='todo'>
            <div key={id}>{content}</div>
            <div>
                <IoIosRemoveCircle className='icons' />
                <FaEdit className='icons' />
            </div>
        </div>
    )
}

export default Todo