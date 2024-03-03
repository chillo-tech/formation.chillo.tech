import { TCard } from "@/types";
import React, { useRef } from "react";
import { SimpleCard } from "./SimpleCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { HorizontalBar } from "./HorizontalBar";

const Slider = ({ childs }: { type: "slider"; childs: TCard[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const superContainerRef = useRef<HTMLDivElement>(null);
  const handleNext = () => {
    containerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handlePrev = () => {
    containerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };
  return (
    <div
      className="relative px-5 overflow-hidden"
      style={{
        maxWidth: "calc(100vw - 300px)",
      }}
      ref={superContainerRef}
    >
      <button
        className="p-4 h-fit w-fit bg-white shadow-sm rounded-[50%] cursor-pointer absolute top-[50%] left-0 z-10"
        onClick={handlePrev}
        style={{
          transform: "translateY(-50%)",
        }}
      >
        <FaChevronLeft size={30} className="text-blue-500" />
      </button>
      <div
        className="flex overflow-x-hidden overflow-y-hidden relative"
        style={{
          paddingBottom: 80,
        }}
        ref={containerRef}
      >
        {childs.map((child, index) => {
          return (
            <div
              key={`simple-card-${index}`}
              className="px-5 w-[200px] shrink-0"
            >
              <SimpleCard data={child} />
            </div>
          );
        })}

        <div className="w-full absolute bottom-5 left-0">
          <HorizontalBar
            links={childs.map((child) => child.link)}
            parentWidth={containerRef.current?.scrollWidth || 0}
          />
        </div>
      </div>
      <button
        className="p-4 bg-white h-fit w-fit shadow-sm rounded-[50%] cursor-pointer absolute top-[50%] right-0"
        onClick={handleNext}
        style={{
          transform: "translateY(-50%)",
        }}
      >
        <FaChevronRight size={30} className="text-blue-500" />
      </button>
    </div>
  );
};

export { Slider };
