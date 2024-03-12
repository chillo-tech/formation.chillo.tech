import { ApplicationContext } from "@/context";
import classNames from "classnames";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { BigAccordion } from "../cards/Accordion";

const AccordionContext = createContext<{
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}>({ selected: -2, setSelected: () => {} });

const Accordion = () => {
  const { state } = useContext(ApplicationContext);

  const training = state.actualTraining;
  const [selected, setSelected] = useState(-2);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: any) => {
      if (
        selected !== -1 &&
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setSelected(-1);
      }
    };

    window.addEventListener("mousedown", handler);
    window.addEventListener("touchstart", handler);
    return () => {
      window.removeEventListener("mousedown", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [selected]);
  return (
    training && (
      <AccordionContext.Provider value={{ selected, setSelected }}>
        <div className="p-0 sm:p-4" ref={containerRef}>
          {training.chapters.map((chapter, index) => {
            return (
              <div
                key={`chapter-${index}`}
                className={`my-4 bg-[#5a68790f] rounded-xl py-1 sm:py-4 px-1  my ${classNames(
                  {
                    "": index !== training.chapters.length - 1,
                  }
                )}`}
              >
                <BigAccordion index={index + 1} chapter={chapter.Chapter_id} />
              </div>
            );
          })}
        </div>
      </AccordionContext.Provider>
    )
  );
};

export { Accordion, AccordionContext };
