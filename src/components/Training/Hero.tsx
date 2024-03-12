import { ApplicationContext } from "@/context";
import { heroSections } from "@/data/TrainingPage/HeroSections";
import classNames from "classnames";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import {
  Objective,
  YellowRate,
  Prerequisite,
  Target,
  ListCard,
} from "..";
import Image from "next/image";

const Hero = () => {
  const {
    state: { actualTraining: training },
  } = useContext(ApplicationContext);

  const topContainerRef = useRef<HTMLDivElement>(null);
  const bottomHeroRef = useRef<HTMLDivElement>(null);
  const optionsContainerRef = useRef<HTMLDivElement>(null);

  const [isNavFixed, setIsNavFixed] = useState(false);
  const [isOptionContainerFixed, setIsOptionContainerFixed] = useState(true);

  useEffect(() => {
    const handleFix = () => {
      if (bottomHeroRef.current) {
        if (
          bottomHeroRef.current?.getBoundingClientRect().top < -15 &&
          bottomHeroRef.current?.getBoundingClientRect().top >
            -bottomHeroRef.current?.offsetHeight + 170
        ) {
          setIsNavFixed(true);
        } else {
          setIsNavFixed(false);
        }
      }

      if (topContainerRef.current && optionsContainerRef.current) {
        if (
          topContainerRef.current?.getBoundingClientRect().bottom <=
          optionsContainerRef.current?.scrollHeight + 140
        ) {
          setIsOptionContainerFixed(false);
        } else {
          setIsOptionContainerFixed(true);
        }
      }
    };

    window.addEventListener("scroll", handleFix);
    return () => {
      window.removeEventListener("scroll", handleFix);
    };
  }, []);

  return (
    <div>
      <div className="relative container py-8 mx-auto text-text px-2 border-b-2 border-b-gray-300">
        <div className="training-top-section" ref={topContainerRef}>
          <div className="flex gap-5 items-center">
            <div className="w-1/2 shrink-0">
              <h1 className="text-heading !font-heading fontF-heading">{training?.title}</h1>
              <p className="text-lg">{training?.subTitle}</p>
              <div className="flex flex-wrap gap-4 items-center my-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">{training?.rate}</span>
                  <YellowRate rate={training?.rate || 4} />
                </div>
                <p>
                  <span>{training?.reviews}</span> <span>revues</span>
                </p>
              </div>
              <p>
                Abonnez-vous pour accéder à tous les cours. Annulez à tout
                moment !
              </p>
              <button className="bg-blue-500 text-white text-md px-4 py-2 rounded-[25px] mb-2 mt-6">
                Inscrivez vous à tous les cours en une fois
              </button>
              <div className="flex items-center gap-2 my-1">
                <div className="w-10 border border-blue-500"></div>
                <span>Ou</span>
                <div className="w-10 border border-blue-500"></div>
              </div>
              <button className="bg-blue-500 text-white text-md px-4 py-2 rounded-[25px] mt-2 mb-6">
                Inscrivez vous à celui ci pour{" "}
                <span className="text-xl font-bold">
                  {training?.price.value}
                </span>{" "}
                {training?.price.currency}
              </button>
            </div>
            <div className="shrink-0 w-1/2">
              <Image
                src={training?.image?.link || ""}
                alt={training?.image?.name || ""}
                height={250}
                width={350}
                className="w-full object-contain"
                style={{
                  backgroundColor: training?.image?.backgroundColor,
                  maxHeight: 350,
                }}
              />
            </div>
          </div>
          <div
            ref={bottomHeroRef}
            className={`${classNames({
              "pt-[135px]": isNavFixed,
            })}`}
          >
            <div
              className={` flex gap-2 p-2 items-stretch border-b-2 border-b-gray-300 ${classNames(
                {
                  "fixed top-[76px] left-0 w-full !border-b-0 bg-white border-l-[1rem] border-r-[1rem] border-l-blue-500 border-r-blue-500":
                    isNavFixed,
                }
              )}`}
            >
              {heroSections.map((item, index) => {
                return (
                  <Link
                    href={`#${item.id}`}
                    key={`herosection-${item.id}-${index}`}
                    scroll
                    className="hover:bg-blue-100 rounded-md p-2"
                  >
                    <button type="button">{item.title}</button>
                  </Link>
                );
              })}
            </div>
            <section id={heroSections[0].id} className="pb-4 my-2">
              <header className="text-heading !font-heading fontF-heading text-lg font-semibold border-b-2 border-b-blue-500 pt-2 mt-4">
                Ce que vous apprendrez
              </header>
              <div className="pl-6 ">
                <div className="grid grid-cols-2 gap-5 my-4">
                  {training?.objectives.map((objective, index) => {
                    return (
                      <Objective
                        key={`objective-${index}`}
                        objective={objective.objective_id}
                      />
                    );
                  })}
                </div>
                <footer className="pt-4 text-heading !font-heading fontF-heading">
                  {training?.description}
                </footer>
              </div>
            </section>
            <section id={heroSections[1].id}>
              <header className="text-heading !font-heading fontF-heading text-lg font-semibold border-b-2 border-b-blue-500 pt-2 mt-4">
                Ce que vous devriez savoir
              </header>
              <div className="space-y-2 pl-6">
                {training?.prerequisites.map((prerequisite, index) => {
                  return (
                    <Prerequisite
                      key={`prerequisite-${index}`}
                      prerequisite={prerequisite.prerequisite_id}
                    />
                  );
                })}
              </div>
            </section>
            <section id={heroSections[2].id}>
              <header className="text-heading !font-heading fontF-heading text-lg font-semibold border-b-2 border-b-blue-500 pt-2 mt-4">
                Pour qui est fait ce cours?
              </header>
              <div className="pl-6 mt-4 grid gap-4">
                {training?.targets.map((target, index) => {
                  return (
                    <Target key={`target-${index}`} target={target.target_id} />
                  );
                })}
              </div>
            </section>
          </div>
        </div>

        <div
          ref={optionsContainerRef}
          className={`border border-gray-300 hover:border-blue-500 shadow-slate-300 hover:shadow-blue-200 shadow-xl rounded-md p-4 bg-white ${classNames(
            {
              "fixed top-[120px] right-[50px] z-10": isOptionContainerFixed,
              "absolute bottom-[30px] right-[26px]": !isOptionContainerFixed,
            }
          )}`}
        >
          <p>APERÇU DU COURS</p>
          <ListCard />
        </div>
      </div>
    </div>
  );
};

export { Hero };
