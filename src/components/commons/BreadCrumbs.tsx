import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { KazimirRegular } from "@/fonts";
const BreadCrumbs = ({
  links,
}: {
  links: { label: string; path?: string }[];
}) => {
  return (
    <div className="flex gap-2 items-center !text-[16px]">
      {links.map((link, index) => {
        return (
          <div key={index} className="flex gap-2 items-center">
            {link.path ? (
              <Link
                className="text-text !text-[16px] align-middle leading-[100%]"
                href={link.path}
              >
                {link.label}
              </Link>
            ) : (
              <span
                className={`text-heading !text-[16px] align-middle leading-[100%] `}
              >
                {link.label}
              </span>
            )}
            {index < links.length - 1 && (
              <span
                className={`text-heading !text-[16px] ${KazimirRegular.className} `}
              >
                <FaChevronRight />
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export { BreadCrumbs };
