import React from "react";
import Card from "./Card";

const TaskItem = ({ task, onToggle }) => {
  return (
    <div onClick={() => onToggle(task.id)} className="cursor-pointer">
      <Card
        bg="bg-gradient-to-br from-indigo-50 to-indigo-100"
        shadow="shadow-none"
      >
        {task.text}
      </Card>
    </div>
  );
};

export default TaskItem;
