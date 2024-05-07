import Image from "next/image";
import Link from "next/link";

const CourseCard = ({
  slug,
  image,
  title,
  hours,
  subTitle,
  price,
  currency = "€",
  discount,
  backgroundColor,
}: {
  slug: string;
  image: string;
  title: string;
  hours: number;
  subTitle: string;
  price: number;
  backgroundColor?: string;
  currency?: string;
  discount?: number;
}) => {
  const link = `/trainings/${slug}`;
  return (
    <div className="max-w-[340px] border border-transparent rounded-md bg-white shadow-md hover:border-blue-500 transition-all">
      <div className="h-1/2 overflow-hidden">
        <Link
          href={link}
          style={{
            backgroundColor: backgroundColor,
          }}
        >
          <Image
            loading="lazy"
            alt={`course-${title}`}
            src={image}
            width={300}
            height={190}
            style={{
              backgroundColor: backgroundColor,
            }}
            className="object-contain shrink-1 py-4 h-[revert-layer] grow-0 rounded-t-md w-full"
          />
        </Link>
      </div>
      <div className="rounded-b-md p-5">
        <p className="flex items-center justify-between">
          <Link href={link}>
            <span className="text-heading text-xl font-bold transition-all cursor-pointer hover:text-blue-500">
              {title}
            </span>
          </Link>
          <span className="rounded-[25px] px-2 py-1 bg-blue-500 text-white">
            {hours}h
          </span>
        </p>
        <p>{subTitle}</p>
        <p className="my-3 font-bold text-heading text-lg">
          <span>{price}</span> <span>{currency}</span>
        </p>
      </div>
    </div>
  );
};

export { CourseCard };
