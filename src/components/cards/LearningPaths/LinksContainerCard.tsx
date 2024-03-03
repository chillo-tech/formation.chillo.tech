import { TLinksContainer } from "@/types";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const LinksContainerCard = ({ data }: { data: TLinksContainer }) => {
  return (
    <div
      style={{
        background: data.background || "transparent",
        color: data.textColor || "inherit",
      }}
      className="rounded-md shadow-sm p-4 shrink-0 h-full"
    >
      <h4 className="pb-4">{data.title}</h4>
      <div className="grid gap-2">
        {data.children.map((child, index) => {
          return (
            <Link href={child.link} key={`link-${index}`}>
              <p className="flex items-center gap-3">
                {child.title} <FaChevronRight size={17} />
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export { LinksContainerCard };
