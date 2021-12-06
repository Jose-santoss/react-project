import React from "react";

import "./Task.css";

function Task({ task }) {
    return <div className="task-container">{task.title}</div>;
}
 
export default Task;