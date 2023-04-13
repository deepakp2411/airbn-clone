import React from "react";

const RentalList = ({ title, img, price, desc }) => {
  return (
    <div className="">
      <div className="mb-8">
        <img
          src={img}
          alt={title}
          className=" object-cover rounded-xl w-full cursor-pointer h-full"
        />

        <div className="flex justify-between items-center py-2 ">
          <h2 className="font-bold text-xl ">{title}</h2>
          <span className="text-slate-700 font-medium">{price}</span>
        </div>

        <div className="break-words mt-3">
          <p className="text-justify text-slate-500">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default RentalList;
