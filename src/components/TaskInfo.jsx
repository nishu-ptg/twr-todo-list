import React from "react";
import TaskHistory from "./TaskHistory";
import Card from "./Card";

const TaskInfo = ({ task, editTask, closeModal }) => {
  console.log(task);
  console.log("Task text:", task.text);
  console.log("Task history:", task.history);

  // if (!task) return null;

  const handleEdit = () => {
    const newText = prompt("Edit Task", task.text);
    editTask(task.id, newText.trim());
    closeModal();
  };
  return (
    <div>
      <Card
        bg="bg-gradient-to-br from-indigo-50 to-indigo-100"
        shadow="shadow-none"
        additionalClass="mb-6 flex justify-between gap-[1.6vw] md:gap-[1vw]"
      >
        <div className="flex-1">
          <h3 className="font-bold text-xl text-indigo-700">{task.text}</h3>
        </div>
        <div
          title="Edit Task"
          className="cursor-pointer flex justify-center"
          onClick={handleEdit}
        >
          <Card
            padding="py-0 px-2"
            shadow="shadow-sm hover:shadow-lg"
            additionalClass="flex justify-center"
            title="Edit"
          >
            <button>
              <i className="fa-solid fa-pen-to-square text-green-500"></i>
            </button>
          </Card>
        </div>

        <div title="Delete Task" className="cursor-pointer flex justify-center">
          <Card
            padding="py-0 px-2"
            shadow="shadow-sm hover:shadow-lg"
            additionalClass="flex justify-center font-semibold cursor-pointer"
          >
            <button>
              <i className="fa-solid fa-ban text-red-500"></i>
            </button>
          </Card>
        </div>
      </Card>
      <TaskHistory task={task} />
    </div>
  );
};

export default TaskInfo;
