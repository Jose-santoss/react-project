import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleAddTaskClick }) => {
    return (
    <>
    {tasks.map((task) => (
    <Task task={task} handleTaskClick= {handleAddTaskClick}/>
    ))}
    </>
    );
};

export default Tasks;           