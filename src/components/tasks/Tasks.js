import React from 'react'
import Task from './task/Task'

const Tasks = ({myTasks, myDeleteTaskFunc, myToggleDone}) => {
  return (
    <div>
        {
            myTasks.map((eachTask,index)=> <Task  key={index} myEachTask = {eachTask}  myDeleteTaskFunc={myDeleteTaskFunc}  myToggleDone={myToggleDone} />)
        }

        

    </div>
  )
}

export default Tasks