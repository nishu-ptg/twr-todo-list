import React from "react";

const TaskHistory = ({ task }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-indigo-100 text-left">
            <th className="border border-indigo-300 px-4 py-2">#</th>
            <th className="border border-indigo-300 px-4 py-2">Text</th>
            <th className="border border-indigo-300 px-4 py-2">Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {task.history.map((entry, index) => (
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
                {new Date(entry.date).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskHistory;
