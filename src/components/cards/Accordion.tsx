import { IChapter } from "@/types";
import { formatMilliseconds } from "@/utils";
import { animated, useSpring } from "@react-spring/web";
import classNames from "classnames";
import { useContext, useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa6";
import { AccordionContext, Objective, RowHeader } from "..";

const BigAccordion = ({
  chapter,
  index,
}: {
  chapter: IChapter;
  index: number;
}) => {
  const headerRef = useRef<HTMLElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const { selected, setSelected } = useContext(AccordionContext);
  const [style, api] = useSpring(() => ({
    from: { height: headerRef.current?.clientHeight || 100 },
    to: {
      height:
        (headerRef.current?.clientHeight || 100) +
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
    if (selected === index) {
      api.start({
        height:
          (headerRef.current?.clientHeight || 100) +
          (bodyRef.current?.clientHeight || 200),
      });
    } else if (selected !== -2) {
      api.start({
        height: headerRef.current?.clientHeight || 100,
      });
    }
  }, [selected === index]);

  const [isHeightSetted, setIsHeightSetted] = useState(false);
  useEffect(() => {
    if (isHeightSetted) return;
    if (headerRef.current) {
      setIsHeightSetted(true);
      api.set({
        height: headerRef.current?.clientHeight,
      });
    }
  }, [headerRef.current]);

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
        <div className="grow-1 w-full gap-3 pr-4 flex justify-between items-center">
          <div>
            <h4
              className={`text-2xl !font-heading fontF-heading !text-md font-medium  flex items-center justify-between my-4`}
            >
              <span className="">{chapter.title} </span>
            </h4>
            <div className="items-center flex gap-3 text-sm">
              <span>{formatMilliseconds(chapter.time)[0]}</span>
              {chapter.rate && (
                <>
                  <span className="h-1 w-1 bg-text rounded-[50%] shrink-0" />
                  <p className="flex items-center gap-1">
                    <span className="text-[18px] !font-heading font-bold">
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
        <p className="text-2xl !font-heading fontF-heading">
          Ce que vous apprendrez
        </p>
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
            return <RowHeader key={`lesson-${index}`} data={lesson} />;
          })}
        </div>
        <div className="text-[19px] ">
          {chapter.description && (
            <p className="leading-7 text-justify">{chapter.description}</p>
          )}
        </div>
        {chapter.skills && chapter.skills.length > 0 && (
          <footer>
            <p className="!font-heading fontF-heading text-2xl">
              Compétences acquises
            </p>
            <div className="flex gap-2 my-3 items-center flex-wrap">
              {chapter.skills?.slice(0, 6).map((topic, index) => {
                return (
                  <div
                    key={index}
                    className="h-fit w-fit rounded-lg text-lg bg-[#1f1f1f59] text-white p-1 px-2"
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

export { BigAccordion };
