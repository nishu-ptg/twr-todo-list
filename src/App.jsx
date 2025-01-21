import React, { useState, useEffect } from "react";
import HeaderSection from "./components/HeaderSection";
import InputSection from "./components/InputSection";
import TaskSection from "./components/TaskSection";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), text: task, status: 0 },
    ]);
  };

  const toggleTaskStatus = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === 0 ? 1 : 0,
            }
          : task
      )
    );
  };

  useEffect(() => {
    console.clear();
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-50 flex flex-col justify-center items-center text-gray-800">
      <div className="container mx-auto flex-1 flex flex-col gap-[1.6vw] md:gap-[1vw] p-[1.6vw] md:p-[1vw]">
        <HeaderSection />
        <InputSection onAddTask={addTask} />
        <TaskSection tasks={tasks} onToggle={toggleTaskStatus} />
      </div>
    </div>
  );
}

export default App;
