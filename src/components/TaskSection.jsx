import React from "react";
import TaskGroup from "./TaskGroup";

const TaskSection = ({
  tasks,
  onToggle,
  openModal,
  closeModal,
  editTask,
  deleteTask,
}) => {
  const incompleteTasks = tasks.filter((task) => task.status === 0);
  const completeTasks = tasks.filter((task) => task.status === 1);

  return (
    <div className="flex flex-1 gap-[1.6vw] md:gap-[1vw]">
      <TaskGroup
        type="incomplete"
        onToggle={onToggle}
        tasks={incompleteTasks}
        openModal={openModal}
        closeModal={closeModal}
        editTask={editTask}
        deleteTask={deleteTask}
      />
      <TaskGroup
        type="complete"
        onToggle={onToggle}
        tasks={completeTasks}
        openModal={openModal}
        closeModal={closeModal}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TaskSection;
