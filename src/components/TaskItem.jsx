import React from "react";
import Card from "./Card";
import TaskToggleButton from "./TaskToggleButton";
import TaskInfo from "./TaskInfo";

const TaskItem = ({
  task,
  onToggle,
  openModal,
  closeModal,
  editTask,
  deleteTask,
  setModalContent,
}) => {
  const handleDetailsClick = () => {
    openModal(
      "Task Details",
      <TaskInfo
        task={task}
        editTask={editTask}
        deleteTask={deleteTask}
        closeModal={closeModal}
        setModalContent={setModalContent}
      />
    );
  };

  return (
    <Card
      bg="bg-gradient-to-br from-indigo-50 to-indigo-100"
      shadow="shadow-none"
      padding="p-0"
      additionalClass="flex justify-center gap-[1.6vw] md:gap-[1vw]"
    >
      <TaskToggleButton task={task} onToggle={onToggle} />

      <div className="flex-1 my-[1.6vw] md:my-[1vw]">{task.text}</div>

      <button className="mr-[1.6vw] md:mr-[1vw]" onClick={handleDetailsClick}>
        <i className="fa-solid fa-ellipsis text-indigo-600 text-2xl"></i>
      </button>
    </Card>
  );
};

export default TaskItem;
