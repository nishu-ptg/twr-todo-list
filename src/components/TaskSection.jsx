import React from "react";
import TaskGroup from "./TaskGroup";

const TaskSection = () => {
  return (
    <div className="flex flex-1 gap-[1.6vw] md:gap-[1vw]">
      <TaskGroup type="incomplete" />
      <TaskGroup type="complete" />
    </div>
  );
};

export default TaskSection;
