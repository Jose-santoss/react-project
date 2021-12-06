import React from 'react';
import Task from './Task';
import { v4 as uuid4 } from 'uuid4';



const Tasks = ({ tasks }) => {
    return (
    <>
    {tasks.map(task => (
    <Task task={task}/>
    ))}
    </>
    )
};;

export default Tasks;