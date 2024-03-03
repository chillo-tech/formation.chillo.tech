import { ApplicationContext } from "@/context";
import { ITraining } from "@/types";
import { useContext, useEffect } from "react";
import { Heading } from ".";
import { SearchTrainings } from "./SearchTrainings";
import { FilterTrainings } from "./FilterTrainings";
import { CoursesView } from "..";
import { categories } from "@/data/Trainings/Categories";

const AllTrainingsMain = ({ trainings }: { trainings: ITraining[] }) => {
  const { state, dispatch } = useContext(ApplicationContext);
  useEffect(() => {
    dispatch({ type: "SET_TRAININGS", payload: trainings });
  }, []);
  return (
    <div>
      <div className="container mx-auto">
        <Heading
          title="Améliorez vos compétences en codage"
          description={`Que vous souhaitiez exceller dans le développement web, le développement mobile ou renforcer vos compétences fondamentales en génie logiciel, il y a un cours pour vous.`}
        />
        <div className="flex flex-col sm:flex-row gap-4 items-stretch">
          <SearchTrainings trainings={trainings} />
          <FilterTrainings options={categories} />
        </div>
        <CoursesView trainings={state.trainings} />
      </div>
    </div>
  );
};

export { AllTrainingsMain };
