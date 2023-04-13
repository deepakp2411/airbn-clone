import React from "react";
import logo from "../assets/logo.png";

import { BiWorld, BiUser } from "react-icons/bi";
import { FiMenu, FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="border-b flex items-center justify-between px-10 md:px-4">
      {/* left  */}
      <div className="h-20 flex">
        <img src={logo} alt="logo" className="object-cover -my-10  " />
      </div>

      <div className="flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full md:hidden">
        <input
          type="search"
          placeholder=""
          className="py-3 w-[20rem] rounded-full outline-none"
        />
        <div className="absolute flex justify-around pr-10 w-full text-gray-500  ">
          <button className="font-bold">Place</button>
          <button className="font-bold">Time</button>
          <button className="font-semibold">Group</button>
        </div>
        <div className="bg-[#ffa560] p-2 mr-2 rounded-full cursor-pointer">
          <FiSearch className="text-white " />
        </div>
      </div>

      <div className="flex items-center gap-3 ">
        <p className="font-semibold text-slate-700">Rent house</p>
        <BiWorld size={20} />

        <div className="flex gap-2 border py-2 px-6 rounded-full cursor-pointer bg-[#ffa560] shadow-lg shadow-gray-300 hover:bg-slate-200 transition-all duration-500 ease-out">
          <FiMenu />
          <AiOutlineUser />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
