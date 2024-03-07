import { ITraining } from "@/types";
import { axiosInstance } from "..";

const getTrainnings = async () => {
  const response = await axiosInstance.get<{ data: ITraining[] }>(
    "/api/backoffice/Training/?fields=*,chapters.Chapter_id.*,levels.Training_Levels_id.*,objectives.objective_id.*,targets.target_id.*,prerequisites.prerequisite_id.*,chapters.Chapter_id.Lessons.*,image.*,price.*,chapters.Chapter_id.objectives.objective_id.*,promotionVideo.*,promotionVideo.thumbnail.image_id.*,videos.video_id.*,videos.video_id.thumbnail.image_id.*,skills.skills_id.*,chapters.Chapter_id.skills.skills_id.*"
  );
  const trainings = response.data.data;
  return trainings;
};

export { getTrainnings as getTrainings };
