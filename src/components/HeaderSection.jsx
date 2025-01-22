import React from "react";
import Card from "./Card";

const HeaderSection = () => {
  return (
    <Card
      bg="bg-gradient-to-br from-indigo-300 to-indigo-500"
      padding="p-0"
      additionalClass="flex items-center justify-between"
    >
      <h1 className="text-lg font-bold text-yellow-200 p-[1.6vw] md:p-[1vw]">
        Todo List
      </h1>
      <ul>
        <li className="px-[1.6vw] md:px-[1vw]">
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
              <i class="fa-brands fa-github text-xl"></i>
            </Card>
          </a>
        </li>
      </ul>
    </Card>
  );
};

export default HeaderSection;
