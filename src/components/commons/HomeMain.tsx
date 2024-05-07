import { ITraining } from "@/types";
import React from "react";
import {
  CourseCard,
  CoursesView,
  Heading,
  Hero,
  LearningPaths,
  Presentation,
  Pricings,
  Statistics,
  Testimonials,
  WhyCodeWithMe,
} from "..";
import { useHome } from "@/hooks";

const HomeMain = ({ trainings }: { trainings: ITraining[] }) => {
  const { state } = useHome({ trainings });
  return (
    <main className="flex flex-col justify-center">
      <Hero />
      <Statistics />
      {/* <Presentation /> */}
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
      <LearningPaths />
      <Testimonials />
      <Pricings />
    </main>
  );
};

export { HomeMain };
