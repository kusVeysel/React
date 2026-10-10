import React from 'react'

function TodoCreate() {
  return (
    <div className='todo-create'>
        <input type="text" placeholder='Todo Giriniz...' className='todo-input'/>
        <button className='todo-create-button'>Oluştur</button>
    </div>
  )
}

export default TodoCreate