import { useState } from 'react'
import './App.css'
import { courses } from './component/Data.jsx'
import Course from './component/Course.jsx'
import Header from './component/Header.jsx'

function App() {

  return (
    <>
      <Header />

      <div className='container-fluid my-4 px-3'>
        <div className='row d-flex justify-content-center'>
          {
            courses?.map((course) => (
              <Course course={course} key={course.id} />
            ))
          }
        </div>
      </div>

    </>
  )
}

export default App