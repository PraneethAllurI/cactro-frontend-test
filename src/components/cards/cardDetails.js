import React from "react";

const CardDetails = ({ icon, number, caption }) => {
  return (
    <div className="flex flex-row items-center justify-start w-48 h-24 bg-white rounded-lg shadow-md overflow-hidden p-4">
      <div className="flex justify-center items-center w-16 h-16 rounded-full p-2">
        {icon}
      </div>
      <div className="ml-4 text-left">
        <div className="font-bold text-2xl">{number}</div>
        <div className="text-sm text-gray-500">{caption}</div>
      </div>
    </div>
  );
};

export default CardDetails;
