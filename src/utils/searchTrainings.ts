import { ITraining } from "@/types";

const searchTrainings = (trainings: ITraining[], toSearch: string) => {
  return trainings.filter((training) => {
    return (
      training.title.includes(toSearch) ||
      training.description.includes(toSearch)
    );
  });
};

export { searchTrainings };
