import { ITraining } from "@/types";
import axios from "axios";

const getTrainnings = async () => {
  const response = await axios.get<{ data: ITraining[] }>("/api/backoffice/");
  const trainings = response.data.data;
  return trainings;
};

export { getTrainnings as getTrainings };
