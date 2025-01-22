import React from "react";
import Card from "./Card";

const TrashView = ({ tasks, restoreTask }) => {
  const deletedTasks = tasks.filter((task) => task.delAt !== undefined);

  const handleRestore = (taskId) => {
    restoreTask(taskId);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-indigo-100 text-left">
            <th className="border border-indigo-300 px-4 py-2">#</th>
            <th className="border border-indigo-300 px-4 py-2">Task</th>
            <th className="border border-indigo-300 px-4 py-2">Deleted On</th>
            <th className="border border-indigo-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {deletedTasks.map((entry, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-indigo-50"}
            >
              <td className="border border-indigo-300 px-4 py-2 text-gray-700">
                {index + 1}
              </td>
              <td className="border border-indigo-300 px-4 py-2 text-gray-700">
                {entry.text}
              </td>
              <td className="border border-indigo-300 px-4 py-2 text-gray-700">
                {new Date(entry.delAt).toLocaleString()}
              </td>
              <td className="border border-indigo-300 px-4 py-2 text-gray-700">
                <div
                  title="Restore"
                  className="cursor-pointer flex justify-center"
                  onClick={() => {
                    handleRestore(entry.id);
                  }}
                >
                  <Card
                    padding="py-0 px-2"
                    shadow="shadow-sm hover:shadow-lg"
                    additionalClass="flex justify-center border border-green-500"
                  >
                    <button>
                      <i className="fa-solid fa-rotate-left text-green-500"></i>
                    </button>
                  </Card>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrashView;
