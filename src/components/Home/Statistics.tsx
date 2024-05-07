import React from "react";
import { CountsCards } from "..";

const Statistics = () => {
  return (
    <div className="py-10 w-full bg-white my-10">
      <div className=" grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 sm:gap-6 container mx-auto">
        {[
          {
            value: "10M+",
            label: "Les étudiants ont enseigné",
            style: "blue",
          },
          {
            value: "3M+",
            label: "Fans Youtube",
            style: "green",
          },
          {
            value: "20+",
            label: "Années d'expérience",
            style: "rose",
          },
          {
            value: "51",
            label: "Cours de codage",
            style: "orange",
          },
        ].map((el, index) => {
          return <CountsCards key={`count-cards-${index}`} {...el} />;
        })}
      </div>
    </div>
  );
};

export { Statistics };
