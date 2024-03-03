import { TCardHideShow } from "@/types";
import Image from "next/image";
import React from "react";
import { SelectItem } from "./SelectItem";

const ShowHideCard = ({ data }: { data: TCardHideShow }) => {
  return (
    <div className="flex flex-col rounded-md shadow-sm p-4">
      <Image src={data.image} alt={data.title} width={300} height={200} />
      <h4>{data.title}</h4>
      <SelectItem childName={data.childName} childs={data.children} />
    </div>
  );
};

export { ShowHideCard };
