import React from "react";
import Card from "./Card";

const HeaderSection = () => {
  return (
    <Card
      bg="bg-gradient-to-br from-indigo-400 to-indigo-600"
      additionalClass="text-yellow-200"
    >
      <h1 className="text-lg font-bold">Todo List</h1>
    </Card>
  );
};

export default HeaderSection;
