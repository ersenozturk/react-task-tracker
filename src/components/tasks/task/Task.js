import React from 'react'
import { FaHotjar } from "react-icons/fa";

const Task = ({myEachTask, myDeleteTaskFunc, myToggleDone}) => {
    // console.log(myEachTask);
    const {id, text, day} = myEachTask

  return (
    <div className={`task ${myEachTask.isDone ? 'done' : ''} `} onDoubleClick={()=>myToggleDone(id)} >
        <h3>
             {text}
            <FaHotjar 
                /* onClick={myDeleteTaskFunc} */
                onClick={()=> myDeleteTaskFunc(id) }   
                style={{cursor:'crosshair' , color:'red'}}
            /> 
        </h3>
        <p>{day}</p>
    </div>
  )
}

export default Task