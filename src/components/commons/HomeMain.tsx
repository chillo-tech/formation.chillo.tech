import { ITraining } from "@/types";
import React from "react";
import {
  CourseCard,
  CoursesView,
  Heading,
  Hero,
  Presentation,
  Testimonials,
} from "..";
import { useHome } from "@/hooks";

const HomeMain = ({ trainings }: { trainings: ITraining[] }) => {
  const { state } = useHome({ trainings });
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <Presentation />
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
      <Testimonials />
    </main>
  );
};

export { HomeMain };
