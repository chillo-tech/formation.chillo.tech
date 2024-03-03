import { TCardPlain } from "@/types";
import Image from "next/image";
import React from "react";

const PlainCard = ({ data }: { data: TCardPlain }) => {
  return (
    <div
      className="rounded-md shadow-sm p-4 relative shrink-0"
      style={{
        background: data.background || "transparent",
        color: data.textColor || "inherit",
      }}
    >
      <h4>{data.title}</h4>
      {data.image && (
        <Image
          src={data.image}
          alt={data.title}
          width={300}
          height={200}
          className="absolute bottom-4 right-4 h-1/5 w-1/5"
        />
      )}
    </div>
  );
};

export { PlainCard };
