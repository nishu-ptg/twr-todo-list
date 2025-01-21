import React from "react";
import Card from "./Card";

const Modal = ({ isOpen, closeModal, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto">
        <Card
          bg="bg-gradient-to-br from-indigo-100 to-indigo-200"
          shadow="shadow-none"
          additionalClass="flex justify-between items-center text-slate-700"
        >
          <h2 className="text-xl font-bold text-indigo-900">{title}</h2>
          <button
            onClick={closeModal}
            className=" hover:text-gray-700 focus:outline-none font-bold"
            title="Close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </Card>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
