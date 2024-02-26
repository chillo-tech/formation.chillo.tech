import { Rate } from "@/components";
import Image from "next/image";
import React from "react";

const Card = ({
  message,
  name,
  photoUrl,
  rate,
  translateX,
  opacity,
}: {
  message: string;
  name: string;
  rate: number;
  photoUrl: string;
  translateX: number;
  opacity: number;
}) => {
  return (
    <div
      className="h-full rounded-2xl lg:p-11 p-5 drop-shadow-md"
      style={{
        transform: `translateX(${translateX})`,
        opacity,
      }}
    >
      <figure>
        <blockquote>
          <p>"{message}"</p>
        </blockquote>
        <div className="h-1 bg-blue-500 w-16 my-6"></div>
        <figcaption className="flex items-center w-fit gap-5">
          <Image
            alt={name}
            src={photoUrl}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col gap-3">
            <p className="font-bold">{name}</p>
            <p>
              <Rate rate={rate} />
            </p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
