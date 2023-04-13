import React from "react";
import { GiFishingBoat, GiMineExplosion } from "react-icons/gi";
import { RiAliensFill } from "react-icons/ri";
import { BsFillTreeFill } from "react-icons/bs";
import { ImKey } from "react-icons/im";
import Filter from "./Filter";

const Filters = () => {
  const sorting = [
    {
      title: "Boat",
      icon: <GiFishingBoat />,
    },
    {
      title: "Private",
      icon: <GiMineExplosion />,
    },
    {
      title: "Top of the world",
      icon: <RiAliensFill />,
    },
    {
      title: "hotels",
      icon: <BsFillTreeFill />,
    },
    {
      title: "Forests",
      icon: <ImKey />,
    },
  ];
  return (
    <div className="">
      <div className="flex justify-center gap-6 mt-5">
        {sorting.map((ele, index) => (
          <Filter filter={ele.title} key={index} icon={ele.icon} />
        ))}
      </div>
    </div>
  );
};

export default Filters;
