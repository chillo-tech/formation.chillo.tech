import classNames from "classnames";
import React from "react";

const CountsCards = ({
  value,
  label,
  style,
}: {
  value: string;
  label: string;
  style: string;
}) => {
  return (
    <div className="shadow-2xl shadow-gray-50 border border-violet-50 rounded-md relative bg-[#f7f7f8]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div
            className={`h-[2px] bg-gradient-to-r from-transparent to-transparent  w-full ${classNames(
              {
                "via-violet-500": style === "blue",
                "via-green-600": style === "green",
                "via-pink-500": style === "pink",
                "via-orange-400": style === "orange",
              }
            )}`}
          ></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-8">
        <p
          className={`font-bold mb-2 text-2xl md:text-3xl lg:text-4xl ${classNames(
            {
              "text-violet-500": style === "blue",
              "text-green-600": style === "green",
              "text-pink-500": style === "pink",
              "text-orange-400": style === "orange",
            }
          )}`}
        >
          {value}
        </p>
        <p className="mb-0 leading-5 text-sm lg:text-base">{label}</p>
      </div>
    </div>
  );
};

export { CountsCards };
