import Image from "next/image";
import React from "react";

const CourseCard = ({
  image,
  title,
  hours,
  subTitle,
  price,
  discount,
}: {
  image: string;
  title: string;
  hours: number;
  subTitle: string;
  price: number;
  discount?: number;
}) => {
  return (
    <div className="max-w-[340px] rounded-md bg-white shadow-md">
      <Image
        loading="lazy"
        alt={`course-${title}`}
        src={image}
        width={300}
        height={190}
        className="object-cover h-1/2 shrink-1 grow-0 rounded-t-md"
      />
      <div className="rounded-b-md p-4">
        <p className="flex items-center justify-between">
          <span className="text-heading text-lg">{title}</span>
          <span className="rounded-[25px] px-2 py-1 bg-blue-500">{hours}h</span>
        </p>
        <p>{subTitle}</p>
        <p>{price}€</p>
      </div>
    </div>
  );
};

export { CourseCard };
