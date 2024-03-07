import { IChapter } from "@/types";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AccordionContext, LabelCard, LessonRow, Objective } from "..";
import { formatMilliseconds } from "@/utils";
import { FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa6";
import classNames from "classnames";
import { useSpring, animated } from "@react-spring/web";
const AccordionChapter = ({
  chapter,
  index,
}: {
  chapter: IChapter;
  index: number;
}) => {
  const headerRef = useRef<HTMLElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const { selected, setSelected } = useContext(AccordionContext);
  console.log("client height", headerRef.current?.clientHeight);
  const [style, api] = useSpring(() => ({
    from: { height: headerRef.current?.clientHeight || 77 },
    to: {
      height:
        (headerRef.current?.clientHeight || 77) +
        (bodyRef.current?.clientHeight || 0),
    },
  }));
  const handleToggle = () => {
    if (index === selected) {
      setSelected(-1);
    } else {
      setSelected(index);
    }
  };

  useEffect(() => {
    console.log("change", index, selected);
    if (selected === index) {
      api.start({
        height:
          (headerRef.current?.clientHeight || 77) +
          (bodyRef.current?.clientHeight || 200),
      });
    } else if (selected !== -2) {
      api.start({
        height: headerRef.current?.clientHeight || 77,
      });
    }
  }, [selected === index]);

  return (
    <animated.section style={style} className={"overflow-hidden"}>
      <header
        ref={headerRef}
        className={`relative flex items-center gap-3 mx-2 border-b ${classNames(
          {
            "pb-4 border-b-gray-300": selected === index,
          }
        )}`}
        onClick={handleToggle}
      >
        <button className={`p-2`}>
          {selected !== index ? <FaChevronDown /> : <FaChevronUp />}
        </button>
        <div className="grow-1 w-full pr-4 flex justify-between items-center">
          <div>
            <h4 className="text-heading text-md font-medium  flex items-center justify-between my-4">
              <span className="border-b border-b-heading">
                {chapter.title}{" "}
              </span>
            </h4>
            <div className="items-center flex gap-3 text-sm">
              <span>{formatMilliseconds(chapter.time)[0]}</span>
              {chapter.rate && (
                <>
                  <span className="h-1 w-1 bg-text rounded-[50%] shrink-0" />
                  <p className="flex items-center gap-1">
                    <span className="text-heading font-bold">
                      {chapter.rate}
                    </span>
                    <FaStar size={18} className="shrink-0 text-blue-500" />
                    {chapter.ratings && (
                      <span>( {chapter.ratings} notes )</span>
                    )}
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="hidden sm:block">
            <p>{chapter.Lessons.length} Cours</p>
          </div>
        </div>
      </header>
      {/* {selected === index && ( */}
      <div ref={bodyRef} className="text-sm space-y-3 px-6 py-4">
        <p className="text-heading">Ce que vous apprendrez</p>
        {chapter.objectives && (
          <div>
            {chapter.objectives.map((objective, index) => {
              return (
                <Objective
                  key={`objective-chapter-${chapter.title}-${index}`}
                  objective={objective.objective_id}
                  checkProps={{
                    size: 15,
                  }}
                />
              );
            })}
          </div>
        )}
        <div className="grid gap-2 py-4">
          {chapter.Lessons.map((lesson, index) => {
            return <LessonRow key={`lesson-${index}`} lesson={lesson} />;
          })}
        </div>
        <div>{chapter.description && <p>{chapter.description}</p>}</div>
        {chapter.skills && chapter.skills.length > 0 && (
          <footer>
            <p className="text-heading text-lg">
              Les compétences que vous gagnerez
            </p>
            <div className="flex gap-2 my-3 items-center">
              {chapter.skills?.slice(0, 6).map((topic, index) => {
                return (
                  <div
                    key={index}
                    className="h-fit w-fit rounded-lg text-sm bg-[#1f1f1f59] text-white p-1 px-2"
                  >
                    {topic.skills_id.label}
                  </div>
                );
              })}
            </div>
          </footer>
        )}
      </div>
      {/* )} */}
    </animated.section>
  );
};

export { AccordionChapter };
