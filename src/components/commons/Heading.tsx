import classNames from "classnames";
import React from "react";

const Heading = ({
  label,
  title,
  description,
  variant = "center",
  className = "",
}: {
  label?: string;
  title?: string;
  description?: string;
  variant?:
    | "center"
    | "left"
    | "right"
    | "justify"
    | "center"
    | "inherit"
    | "initial"
    | "revert";
  className?: string;
}) => {
  return (
    <header
      className={`mx-auto container w-fit max-w-[720px] my-10 ${classNames({
        "text-left": variant === "left",
        "text-right": variant === "right",
        "text-justify": variant === "justify",
        "text-center": variant === "center",
        "text-inherit": variant === "inherit",
        "text-initial": variant === "initial",
        "text-revert": variant === "revert",
      })} ${className}`}
    >
      {label && <p className="text-blue-500 mt-4">{label}</p>}
      {title && (
        <h2 className="text-heading font-heading fontF-heading mt-5 mb-10">
          {title}
        </h2>
      )}
      {description && <p className="text-lg mt-5">{description}</p>}
    </header>
  );
};

export { Heading };
