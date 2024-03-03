import { ApplicationContext } from "@/context";
import { ITraining } from "@/types";
import { searchTrainings } from "@/utils";
import React, { useContext, useState } from "react";

const SearchTrainings = ({ trainings }: { trainings: ITraining[] }) => {
  const { dispatch } = useContext(ApplicationContext);
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    dispatch({
      type: "SET_TRAININGS",
      payload: searchTrainings(trainings, e.target.value),
    });
  };
  return (
    <input
      type="text"
      name="search-training"
      placeholder="Recherche..."
      value={value}
      onChange={handleChange}
      className="border border-gray-300 px-4 py-2 bg-transparent  rounded-md focus-visible:outline-blue-500 min-w-[100%] sm:min-w-[300px]"
    />
  );
};

export { SearchTrainings };
