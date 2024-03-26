import { TCardRow } from "@/types";
import Image from "next/image";
import React from "react";

const RowCard = ({ data }: { data: TCardRow }) => {
  return (
    <div className="flex rounded-md shadow-sm max-w-[500px] overflow-hidden">
      <div className="p-5">
        <h4 dangerouslySetInnerHTML={{ __html: data.text }} />
      </div>
      <Image
        src={data.image}
        alt={"row-card"}
        width={300}
        height={200}
        className="w-1/2"
      />
    </div>
  );
};

export { RowCard };
