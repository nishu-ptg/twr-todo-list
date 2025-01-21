import React from "react";
import Card from "./Card";
import TaskItem from "./TaskItem";

const TaskGroup = ({ type }) => {
  const title = type === "complete" ? "Complete" : "Incomplete";
  return (
    <Card additionalClass="flex-1">
      <div className="flex flex-col gap-[1.6vw] md:gap-[1vw]">
        <Card
          bg="bg-gradient-to-br from-indigo-200 to-indigo-300"
          shadow="shadow-none"
          additionalClass="text-yellow-200"
        >
          <h2 className="text-lg font-bold text-center">{title}</h2>
        </Card>
        <TaskItem>ListItem</TaskItem>
        <TaskItem>ListItem</TaskItem>
      </div>
    </Card>
  );
};

export default TaskGroup;
