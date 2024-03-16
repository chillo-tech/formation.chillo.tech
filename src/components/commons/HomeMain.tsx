import { useHome } from "@/hooks";
import { ITraining } from "@/types";
import {
  CoursesView,
  Heading,
  HomeHero,
  LearningPaths,
  Pricings,
  Statistics,
  Testimonials,
  WhyCodeWithMe,
} from "..";

const HomeMain = ({ trainings }: { trainings: ITraining[] }) => {
  const { state } = useHome({ trainings });
  return (
    <main className="flex flex-col justify-center">
      <HomeHero />
      <Statistics />
      <WhyCodeWithMe />
      <div className="">
        <div className="container mx-auto">
          <Heading
            label="Tous nos cours"
            title="Améliorez vos compétences en codage"
            description={`Que vous cherchiez à évoluer vers une carrière dans la technologie ou à progresser dans votre rôle actuel, mes cours vous donnent les connaissances et l'expérience dont vous avez besoin pour réussir.`}
          />

          <CoursesView trainings={state.trainings} />
        </div>
      </div>
      {/* <LearningPaths /> */}
      <Testimonials />
      <Pricings />
    </main>
  );
};

export { HomeMain };
