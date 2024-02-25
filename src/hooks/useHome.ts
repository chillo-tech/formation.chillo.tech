import { ApplicationContext } from "@/context";
import { reducerTypeNames } from "@/data/context";
import { getTrainings } from "@/services/endpoints/getTrainings";
import { useContext } from "react";
import { useQuery } from "react-query";

const useHome = () => {
  const { state, dispatch } = useContext(ApplicationContext);
  const getAllTrainings = async () => {
    const trainings = await getTrainings();
    dispatch({ type: reducerTypeNames.SET_TRAININGS, payload: trainings });
    return trainings;
  };

  const query = useQuery({
    queryFn: getAllTrainings,
    queryKey: ["trainings", 1],
    retry: 1,
  });

  return { query, state };
};


export {useHome}