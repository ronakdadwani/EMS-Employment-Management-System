import React from 'react'
import Header from '../other/header'
import TaskListNUmbers from '../other/TaskListNUmbers'


const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen '> 
      <Header/>
      <TaskListNUmbers/>
    </div>
  )
}

export default EmployeeDashboard
