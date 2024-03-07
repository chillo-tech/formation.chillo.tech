import { IPrerequisite } from "@/types";
import React from "react";

const Prerequisite = ({ prerequisite }: { prerequisite: IPrerequisite }) => {
  return (
    <div>
      <p className="text-heading w-fit my-4">{prerequisite.label}</p>
      <p className="text-justify">{prerequisite.description}</p>
    </div>
  );
};

export { Prerequisite };
