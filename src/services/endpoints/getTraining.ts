import { ITraining } from "@/types";
import { axiosInstance } from "..";

type TPropsSlugDefinition = { slug: string };
type TPropsIdDefinition = { id: number | string };
type TProps = TPropsSlugDefinition | TPropsIdDefinition;

const getTraining = async (props: TProps) => {
  let training = {} as ITraining;
  if ("slug" in props) {
    const response = await axiosInstance.get<{ data: ITraining[] }>(
      `/api/backoffice/Training/?fields=*,chapters.Chapter_id.*,levels.Training_Levels_id.*,objectives.objective_id.*,targets.target_id.*,prerequisites.prerequisite_id.*,chapters.Chapter_id.Lessons.*,image.*,price.*,chapters.Chapter_id.objectives.objective_id.*,promotionVideo.*,promotionVideo.thumbnail.image_id.*,videos.video_id.*,videos.video_id.thumbnail.image_id.*,skills.skills_id.*,chapters.Chapter_id.skills.skills_id.*,sessions.*,sessions.prix.ConceptPrix_id.*&filter[slug][_eq]=${props.slug}`
    );
    training = response.data.data[0];
  }

  if ("id" in props) {
    const response = await axiosInstance.get<{ data: ITraining }>(
      `/api/backoffice/Training/${props.id}/?fields=*,chapters.Chapter_id.*,levels.Training_Levels_id.*,objectives.objective_id.*,targets.target_id.*,prerequisites.prerequisite_id.*,chapters.Chapter_id.Lessons.*,image.*,price.*,chapters.Chapter_id.objectives.objective_id.*,promotionVideo.*,promotionVideo.thumbnail.image_id.*,videos.video_id.*,videos.video_id.thumbnail.image_id.*,skills.skills_id.*,chapters.Chapter_id.skills.skills_id.*,sessions.*,sessions.prix.ConceptPrix_id.*`
    );
    training = response.data.data;
  }

  if (!training) {
    return null;
  }
  return training;
};

export { getTraining };
