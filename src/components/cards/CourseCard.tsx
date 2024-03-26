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
  isPreview,
  textColor,
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
  isPreview?: boolean;
  textColor?: string;
}) => {
  const link = `/trainings/${slug}`;
  return (
    <div className=" border border-transparent rounded-md w-full bg-white shadow-md hover:border-blue-500 transition-all">
      <div className="overflow-hidden grid">
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
        {isPreview && (
          <div
            className="py-2 relative -top-2"
            style={{
              background: backgroundColor,
              color: textColor || "#1e133e",
            }}
          >
            <div className="w-full text-center text-2xl font-bold py-1 bg-white">
              <span
                style={{
                  color: backgroundColor,
                }}
              >
                PREVIEW
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="rounded-b-md p-5">
        <p className="flex items-start justify-between">
          <Link href={link}>
            <span className="text-heading !font-heading text-xl font-bold transition-all cursor-pointer hover:text-blue-500">
              {title}
            </span>
          </Link>
          <span className="rounded-[25px] px-2 py-1 bg-blue-500 text-white">
            {hours}h
          </span>
        </p>
        <p>{subTitle}</p>
        <p className="my-3 font-bold text-heading !font-heading text-lg">
          <span>{price}</span> <span>{currency}</span>
        </p>
      </div>
    </div>
  );
};

export { CourseCard };
