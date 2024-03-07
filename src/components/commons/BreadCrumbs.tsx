import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

const BreadCrumbs = ({
  links,
}: {
  links: { label: string; path?: string }[];
}) => {
  return (
    <div className="flex gap-2 items-center">
      {links.map((link, index) => {
        return (
          <div key={index} className="flex gap-2 items-center">
            {link.path ? (
              <Link className="text-text" href={link.path}>
                {link.label}
              </Link>
            ) : (
              <span className="text-heading">{link.label}</span>
            )}
            {index < links.length - 1 && (
              <span className="text-heading">
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
