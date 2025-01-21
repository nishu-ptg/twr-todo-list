import React from "react";

const TaskToggleButton = ({ task, onToggle }) => {
  return (
    <button
      onClick={() => onToggle(task.id)}
      className="cursor-pointer text-2xl ml-[1.6vw] md:ml-[1vw]"
    >
      {task.status === 0 ? (
        <i
          className="fa-regular fa-circle text-red-500"
          title="Mark as Complete"
        ></i>
      ) : (
        <i
          className="fa-regular fa-check-circle text-green-500"
          title="Mark as Incomplete"
        ></i>
      )}
    </button>
  );
};

export default TaskToggleButton;
