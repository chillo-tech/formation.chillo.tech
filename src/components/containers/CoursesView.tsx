import { ITraining } from "@/types";
import React from "react";
import { CourseCard } from "..";
import Link from "next/link";

const CoursesView = ({ trainings }: { trainings: ITraining[] }) => {
  return (
    <div className="flex flex-col items-center mt-5 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-6">
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
            />
          );
        })}
      </div>
      <Link
        href="/trainings"
        className="rounded-[25px] bg-green-300 text-white py-2 px-5 w-fit h-fit mx-auto text-lg"
      >
        TOUS LES COURS
      </Link>
      <p className="text-lg my-4">
        Vous ne savez pas par où commencer ? Consultez nos{" "}
        <Link
          href="#"
          className="border-b-2 pb-1 border-text hover:border-blue-500 transition-all hover:text-blue-500"
        >
          parcours d'apprentissage.
        </Link>
      </p>
    </div>
  );
};

export { CoursesView };
