import React, { useState, useEffect } from "react";
import HeaderSection from "./components/HeaderSection";
import InputSection from "./components/InputSection";
import TaskSection from "./components/TaskSection";
import Modal from "./components/Modal";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("taskList");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const createHistoryEntry = (text) => ({
    text,
    date: new Date().toISOString(),
  });

  const updateTask = (tasks, taskId, updatedFields) => {
    return tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedFields } : task
    );
  };

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      status: 0,
      history: [createHistoryEntry(taskText)],
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTaskStatus = (taskId) => {
    setTasks((prevTasks) =>
      updateTask(prevTasks, taskId, {
        status:
          prevTasks.find((task) => task.id === taskId).status === 0 ? 1 : 0,
      })
    );
  };

  const editTask = (taskId, newText) => {
    setTasks((prevTasks) =>
      updateTask(prevTasks, taskId, {
        text: newText,
        history: [
          ...prevTasks.find((task) => task.id === taskId).history,
          createHistoryEntry(newText),
        ],
      })
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };
  const toggleDelete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              delAt: task.delAt ? undefined : new Date().toISOString(),
            }
          : task
      )
    );
  };

  const deletedCount = tasks.filter((task) => task.delAt).length;

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(tasks));
    // console.clear();
    // console.log(tasks);
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
        <HeaderSection
          deletedCount={deletedCount}
          openModal={openModal}
          closeModal={closeModal}
          tasks={tasks}
          restoreTask={toggleDelete}
          deleteTask={deleteTask}
          modalTitle={modalTitle}
          setModalContent={setModalContent}
        />
        <InputSection onAddTask={addTask} />
        <TaskSection
          tasks={tasks}
          onToggle={toggleTaskStatus}
          openModal={openModal}
          closeModal={closeModal}
          editTask={editTask}
          // deleteTask={deleteTask}
          deleteTask={toggleDelete}
          modalTitle={modalTitle}
          setModalContent={setModalContent}
        />

        <Modal isOpen={isModalOpen} closeModal={closeModal} title={modalTitle}>
          {modalContent}
        </Modal>
      </div>
    </div>
  );
}

export default App;
