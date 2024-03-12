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
  return objective.label ? (
    <div className="flex gap-3 text-xl items-center">
      <FaCheck className="text-blue-500 shrink-0" size={20} {...checkProps} />
      <p className="text-xl">{objective.label}</p>
    </div>
  ) : null;
};

export { Objective };
