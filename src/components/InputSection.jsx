import React from "react";
import Card from "./Card";

const InputSection = () => {
  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-span-1"></div>
        <div className="col-span-4">
          <div className="grid grid-cols-4 gap-[1.6vw] md:gap-[1vw]">
            <div className="col-span-3">
              <Card>
                <input
                  type="text"
                  className="w-full h-full bg-transparent text-gray-800 focus:outline-none"
                  placeholder="Add a task"
                />
              </Card>
            </div>
            <div className="col-span-1">
              <Card
                bg="bg-gradient-to-br from-indigo-400 to-indigo-600"
                additionalClass="cursor-pointer flex justify-center items-center font-bold text-yellow-200"
              >
                <p>Add</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputSection;
