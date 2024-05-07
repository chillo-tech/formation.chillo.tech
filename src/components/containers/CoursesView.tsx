import { ITraining } from "@/types";
import React from "react";
import { CourseCard } from "..";
import Link from "next/link";

const CoursesView = ({ trainings }: { trainings: ITraining[] }) => {
  return (
    <div className="flex flex-col items-center mt-5 mb-8">
      <div className="w-full grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
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
              isPreview={training.isPreview}
              textColor={training.textColor}
            />
          );
        })}
      </div>
      <Link
        href="/trainings"
        className="rounded-[35px] bg-green-300 text-center text-white py-5 px-8 w-full md:w-fit h-fit mx-auto text-2xl font-bold"
      >
        Tous les cours
      </Link>
      <p className="text-center md:text-justify text-lg my-4">
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
