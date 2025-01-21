import React from "react";
import Card from "./Card";

const TaskItem = ({ children }) => {
  return (
    <Card
      bg="bg-gradient-to-br from-indigo-50 to-indigo-100"
      shadow="shadow-none"
    >
      {children}
    </Card>
  );
};

export default TaskItem;
