import { iconService } from "@/data";
import { ISection } from "@/types";
import Image from "next/image";
import React from "react";

const CodeWithMeCard = ({ section }: { section: ISection }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
      {section.direction === "left" ? (
        <>
          <div className="md:mx-4">
            <div className="grid place-items-center w-12 h-12 rounded-full my-3 bg-blue-500">
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
          <div className="flex justify-center items-center justify-self-center w-1/2">
            <Image
              src={section.image}
              height={400}
              width={500}
              className=" object-cover"
              alt={section.label}
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center w-1/2 justify-self-center">
            <Image
              src={section.image}
              height={400}
              width={500}
              className=" object-cover"
              alt={section.label}
            />
          </div>
          <div className="md:mx-4">
            <div className="grid place-items-center w-12 h-12 rounded-full my-3 bg-blue-500">
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
        </>
      )}
    </div>
  );
};

export { CodeWithMeCard };
