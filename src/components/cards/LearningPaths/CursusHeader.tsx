import React from "react";

const CursusHeader = ({
  label,
  title,
  subTitle,
}: {
  label?: string;
  title?: string;
  subTitle?: string;
}) => {
  return (
    <div className="min-w-[150px] max-w-[200px]">
      {label && <label className="text-blue-500 text-md">{label}</label>}
      {title && (
        <h4 className="py-3 text-heading text-2xl text-bold">{title}</h4>
      )}
      {subTitle && <p className="text-gray-400 text-sm">{subTitle}</p>}
    </div>
  );
};

export { CursusHeader };
