import React from "react";

const Filter = ({ filter, icon }) => {
  return (
    <div className="flex items-center px-4 py-2 bg-[#ff5a70] rounded-full text-white md:px-2 cursor-pointer  md:text-sm md:items-center ">
      <div className="flex items-center gap-4 md:gap-1 hover:text-black">
        <span>{icon}</span>
        <h4>{filter}</h4>
      </div>
    </div>
  );
};

export default Filter;
