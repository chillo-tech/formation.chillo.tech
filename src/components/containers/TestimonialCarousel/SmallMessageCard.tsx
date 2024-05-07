import { YellowRate } from "@/components";
import React from "react";

const SmallMessageCard = ({
  rate,
  title,
  description,
  name,
  date,
}: {
  rate: number;
  title: string;
  description: string;
  name: string;
  date: string;
}) => {
  return (
    <div className="mx-[55px]">
      <div className="space-y-2">
        <YellowRate rate={rate} />
        <p className=" text-heading !text-2xl !font-heading fontF-heading">
          {title}
        </p>
        <p className="text-justify">{description}</p>
        <p className="!text-gray">
          <span className="font-semibold">{name}</span>, {date}{" "}
        </p>
      </div>
    </div>
  );
};

export { SmallMessageCard };
