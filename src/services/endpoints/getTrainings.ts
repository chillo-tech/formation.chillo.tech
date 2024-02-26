import { ITraining } from "@/types";
import { axiosInstance } from "..";

const getTrainnings = async () => {
  const response = await axiosInstance.get<{ data: ITraining[] }>(
    "/api/backoffice/Training/?fields=*,chapters.Chapter_id.*,levels.Training_Levels_id.*,objectives.objective_id.*,targets.target_id.*,prerequisites.prerequisite_id.*,chapters.Chapter_id.Lessons.*,image.*,price.*"
  );
  const trainings = response.data.data;
  return trainings;
};

export { getTrainnings as getTrainings };
