import React from "react";
import Card from "./Card";

const TaskItem = ({ task, onToggle }) => {
  return (
    <Card
      bg="bg-gradient-to-br from-indigo-50 to-indigo-100"
      shadow="shadow-none"
      padding="p-0"
      additionalClass="flex justify-center gap-[1.6vw] md:gap-[1vw]"
    >
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

      <div className="flex-1 my-[1.6vw] md:my-[1vw]">{task.text}</div>

      <button className="mr-[1.6vw] md:mr-[1vw]">
        <i className="fa-solid fa-ellipsis text-indigo-600 text-2xl"></i>
      </button>
    </Card>
  );
};

export default TaskItem;
