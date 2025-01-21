import React from "react";
import TaskHistory from "./TaskHistory";
import Card from "./Card";

const TaskInfo = ({ task }) => {
  return (
    <div>
      <hr className="my-2" />
      <h3 className="text-center font-bold text-xl">{task.text}</h3>
      <hr className="my-2" />
      <TaskHistory task={task} />
    </div>
  );
};

export default TaskInfo;
