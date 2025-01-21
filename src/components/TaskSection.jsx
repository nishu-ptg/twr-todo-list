import React from "react";
import TaskGroup from "./TaskGroup";

const TaskSection = ({ tasks, onToggle }) => {
  const incompleteTasks = tasks.filter((task) => task.status === 0);
  const completeTasks = tasks.filter((task) => task.status === 1);

  return (
    <div className="flex flex-1 gap-[1.6vw] md:gap-[1vw]">
      <TaskGroup
        onToggle={onToggle}
        type="incomplete"
        tasks={incompleteTasks}
      />
      <TaskGroup onToggle={onToggle} type="complete" tasks={completeTasks} />
    </div>
  );
};

export default TaskSection;
