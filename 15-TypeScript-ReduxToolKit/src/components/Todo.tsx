import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import '../css/Todo.css'

function Todo() {
    return (
        <div className='todo'>
            <div>İlk Todo</div>
            <div>
                <IoIosRemoveCircle className='icons'/>
                <FaEdit className='icons'/>
            </div>
        </div>
    )
}

export default Todo