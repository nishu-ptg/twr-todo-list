import React, { useState, useEffect } from "react";
import HeaderSection from "./components/HeaderSection";
import InputSection from "./components/InputSection";
import TaskSection from "./components/TaskSection";
import Modal from "./components/Modal";

function App() {
  const [tasks, setTasks] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

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

  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalTitle("");
    setModalContent(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-50 flex flex-col justify-center items-center text-gray-800">
      <div className="container mx-auto flex-1 flex flex-col gap-[1.6vw] md:gap-[1vw] p-[1.6vw] md:p-[1vw]">
        <HeaderSection />
        <InputSection onAddTask={addTask} />
        <TaskSection
          tasks={tasks}
          onToggle={toggleTaskStatus}
          openModal={openModal}
        />

        <Modal isOpen={isModalOpen} closeModal={closeModal} title={modalTitle}>
          {modalContent}
        </Modal>
      </div>
    </div>
  );
}

export default App;
