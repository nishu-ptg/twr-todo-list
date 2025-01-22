import React from "react";
import TaskGroup from "./TaskGroup";

const TaskSection = ({
  tasks,
  onToggle,
  openModal,
  closeModal,
  editTask,
  deleteTask,
  modalTitle,
  setModalContent,
}) => {
  // const incompleteTasks = tasks.filter((task) => task.status === 0);
  // const completeTasks = tasks.filter((task) => task.status === 1);
  const incompleteTasks = tasks.filter(
    (task) => task.status === 0 && task.delAt === undefined
  );
  const completeTasks = tasks.filter(
    (task) => task.status === 1 && task.delAt === undefined
  );

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
        modalTitle={modalTitle}
        setModalContent={setModalContent}
      />
      <TaskGroup
        type="complete"
        onToggle={onToggle}
        tasks={completeTasks}
        openModal={openModal}
        closeModal={closeModal}
        editTask={editTask}
        deleteTask={deleteTask}
        modalTitle={modalTitle}
        setModalContent={setModalContent}
      />
    </div>
  );
};

export default TaskSection;
