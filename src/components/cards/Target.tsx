import { ITarget } from "@/types";
import React from "react";
import { FaCheck, FaXmark } from "react-icons/fa6";

const Target = ({ target }: { target: ITarget }) => {
  return (
    <div className="flex gap-3 ">
      <FaCheck size={20} className="shrink-0" />{" "}
      <div className="">{target.label}</div>
    </div>
  );
};
export { Target };
