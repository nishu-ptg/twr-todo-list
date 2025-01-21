import React from "react";

const Modal = ({ isOpen, closeModal, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-6 relative max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 focus:outline-none font-bold"
            title="Close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
