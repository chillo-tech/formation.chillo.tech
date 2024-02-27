import { iconService } from "@/data";
import { ISection } from "@/types";
import Image from "next/image";
import React from "react";

const CodeWithMeCard = ({ section }: { section: ISection }) => {
  return section.direction === "left" ? (
    <div className="flex flex-col sm:grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
      <div className="md:mx-4">
        <div className="grid place-items-center w-12 h-12 rounded-full my-3 border border-[#838383de] bg-[#f0f0f0de]">
          <div className="">
            {iconService.getIcon(section.iconName, {
              color: section.color,
            })}
          </div>
        </div>
        <span
          className="mb-3 inline-block font-medium md:font-semibold"
          style={{ color: section.color }}
        >
          {section.label}
        </span>
        <h2 className="text-3xl">{section.title}</h2>
        <p>{section.description}</p>
      </div>
      <div className="flex justify-center md:w-1/2 justify-self-center md:items-start items-center">
        <Image
          src={section.image}
          height={400}
          width={500}
          className="w-1/2 mx-auto md:w-auto object-cover"
          alt={section.label}
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 my-10">
      <div className="flex justify-center md:w-1/2 justify-self-center md:items-start items-center">
        <Image
          src={section.image}
          height={400}
          width={500}
          className="w-1/2 mx-auto md:w-auto object-cover"
          alt={section.label}
        />
      </div>
      <div className="md:mx-4">
        <div className="grid place-items-center w-12 h-12 rounded-full my-3 border border-[#838383de] bg-[#f0f0f0de]">
          <div className="">
            {iconService.getIcon(section.iconName, {
              color: section.color,
            })}
          </div>
        </div>
        <span
          className="mb-3 inline-block font-medium md:font-semibold"
          style={{ color: section.color }}
        >
          {section.label}
        </span>
        <h2 className="text-3xl">{section.title}</h2>
        <p>{section.description}</p>
      </div>
    </div>
  );
};

export { CodeWithMeCard };
