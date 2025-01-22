import React, { useEffect } from "react";
import Card from "./Card";
import TrashView from "./TrashView";

const HeaderSection = ({
  deletedCount,
  openModal,
  closeModal,
  tasks,
  restoreTask,
  deleteTask,
  modalTitle,
  setModalContent,
}) => {
  const handleTrashClick = () => {
    openModal(
      "Deleted Tasks",
      <TrashView
        deletedCount={deletedCount}
        tasks={tasks}
        restoreTask={restoreTask}
        deleteTask={deleteTask}
      />
    );
  };

  useEffect(() => {
    if (openModal && modalTitle === "Deleted Tasks") {
      setModalContent(
        <TrashView
          deletedCount={deletedCount}
          tasks={tasks}
          restoreTask={restoreTask}
          deleteTask={deleteTask}
        />
      );
    }
  }, [tasks]);

  return (
    <Card
      bg="bg-gradient-to-br from-indigo-300 to-indigo-500"
      padding="p-0"
      additionalClass="flex items-center justify-between"
    >
      <h1 className="text-lg font-bold text-yellow-200 p-[1.6vw] md:p-[1vw]">
        Todo List
      </h1>
      <ul className="flex mx-[1.6vw] md:mx-[1vw] gap-[1.6vw] md:gap-[1vw]">
        <li>
          <a href="#" title="Open Trash" onClick={handleTrashClick}>
            <Card
              padding="p-0"
              additionalClass="h-9 px-[1.6vw] md:px-[1vw] flex justify-center items-center"
            >
              <i className="fa-regular fa-trash-can text-xl"></i>
              <span className="inline-block bg-red-500 text-white text-xs font-semibold px-2 py-0 rounded-full ml-2">
                {deletedCount}
              </span>
            </Card>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/nishu-ptg/twr-todo-list/"
            target="_blank"
            title="Open Github Project"
            onClick={(e) => {
              const shouldOpen = window.confirm(
                "Do you want to open the github link for this project?"
              );
              if (!shouldOpen) {
                e.preventDefault();
              }
            }}
          >
            <Card
              padding="p-0"
              additionalClass="w-9 h-9 flex justify-center items-center"
            >
              <i className="fa-brands fa-github text-xl"></i>
            </Card>
          </a>
        </li>
      </ul>
    </Card>
  );
};

export default HeaderSection;
