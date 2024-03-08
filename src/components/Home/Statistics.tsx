import React from "react";
import { CountsCards } from "..";
import { mainStats } from "@/data";

const Statistics = () => {
  return (
    <div className="py-10 w-full bg-white my-10">
      <div className=" grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 sm:gap-6 container mx-auto">
        {mainStats.map((el, index) => {
          return <CountsCards key={`count-cards-${index}`} {...el} />;
        })}
      </div>
    </div>
  );
};

export { Statistics };
