import { ApplicationContext } from "@/context";
import { reducerTypeNames } from "@/data/context";
import { ITraining } from "@/types";
import { useContext, useEffect } from "react";

const useHome = ({ trainings }: { trainings: ITraining[] }) => {
  const { state, dispatch } = useContext(ApplicationContext);
  useEffect(() => {
    dispatch({ type: reducerTypeNames.SET_TRAININGS, payload: trainings });
  }, []);

  return { state };
};

export { useHome };
