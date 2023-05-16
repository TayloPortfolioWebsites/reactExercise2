import React from "react";
import {FaTimesCircle} from 'react-icons/fa';

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
        <h3><FaTimesCircle style={{color:'red', cursor:'pointer'}} onClick={onDelete}/> {task.text}</h3>
        <p className="task__para">{task.day}</p>
    </div>
  )
}

export default Task