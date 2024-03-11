import { IObjective } from "@/types";
import React from "react";
import { IconBaseProps } from "react-icons";
import { FaCheck } from "react-icons/fa6";

const Objective = ({
  objective,
  checkProps,
}: {
  objective: IObjective;
  checkProps?: IconBaseProps;
}) => {
  return (
    <div className="flex gap-3 text-xl">
      <FaCheck className="text-blue-500 shrink-0" size={20} {...checkProps} />
      <p className="text-xl">{objective.label}</p>
    </div>
  );
};

export { Objective };
