import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa6";

const YellowRate = ({ rate }: { rate: number }) => {
  return (
    <div className="inline-flex gap-1 items-center">
      {Array(Math.floor(rate) >= 5 ? 5 : Math.floor(rate))
        .fill(0)
        .map((_, index) => {
          return <FaStar key={`star-${index}`} color={"#99aa00"} size={20} />;
        })}
      {rate < 5 && rate - Math.floor(rate) !== 0 && (
        <FaStarHalfAlt color={"#99aa00"} size={20} />
      )}
      {rate < 5 &&
        Array(5 - Math.ceil(rate))
          .fill(0)
          .map((_, index) => {
            return (
              <FaRegStar key={`star-${index}`} color={"#99aa00"} size={20} />
            );
          })}
    </div>
  );
};

export { YellowRate };
