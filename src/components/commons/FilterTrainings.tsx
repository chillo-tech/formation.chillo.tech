import { TOption } from "@/types";
import React from "react";
import { Select } from "../ui/Select";

const FilterTrainings = ({ options }: { options: TOption[] }) => {
  const handleSelectOption = (option: TOption) => {
    console.log(option);
  };
  return (
    <div>
      <Select options={options} handleSelect={handleSelectOption} />
    </div>
  );
};

export { FilterTrainings };
