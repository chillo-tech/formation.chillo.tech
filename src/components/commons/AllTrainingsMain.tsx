import { ApplicationContext } from "@/context";
import { categories } from "@/data/Trainings/Categories";
import { ITraining } from "@/types";
import { useContext, useEffect } from "react";
import { Heading } from ".";
import { CourseCard } from "..";
import { FilterTrainings } from "./FilterTrainings";
import { SearchTrainings } from "./SearchTrainings";

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
        <div className="w-full grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-6">
          {trainings.map((training, index) => {
            return (
              <CourseCard
                key={`training-${index}`}
                hours={training.hours}
                price={training.price.value}
                image={training.image.link}
                subTitle={training.subTitle}
                title={training.title}
                slug={training.slug}
                backgroundColor={training.image.backgroundColor}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { AllTrainingsMain };
