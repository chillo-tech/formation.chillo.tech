import { LinkWrapper } from "@/components";
import React, { useMemo } from "react";

const HorizontalBar = ({
  links,
  parentWidth,
}: {
  links: (string | undefined)[];
  parentWidth: number;
}) => {
  const childWidth = useMemo(
    () => parentWidth / links.length,
    [links.length, parentWidth]
  );
  const myWidth = useMemo(
    () => parentWidth - childWidth,
    [parentWidth, childWidth]
  );
  return (
    <div
      className="relative h-1 bg-gray-300"
      style={{
        left: childWidth * 0.5,
        width: myWidth,
      }}
    >
      {links.map((link, index) => {
        return (
          <LinkWrapper href={link} key={`link-${index}`}>
            <div
              className="bg-gray-200 absolute h-[25px] w-[25px] rounded-[50%]"
              style={{
                left: index * childWidth - 12.5,
                top: -12.5,
              }}
            ></div>
          </LinkWrapper>
        );
      })}
    </div>
  );
};

export { HorizontalBar };
