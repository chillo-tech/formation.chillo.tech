import React from "react";

const SmallHeader = ({
  label,
  title,
  subTitle,
}: {
  label?: string;
  title?: string;
  subTitle?: string;
}) => {
  return (
    <div className="md:min-w-[150px] md:max-w-[200px]">
      {label && <label className="text-blue-500 text-md">{label}</label>}
      {title && (
        <h4 className="py-3 text-heading !font-heading fontF-heading text-2xl text-bold">{title}</h4>
      )}
      {subTitle && <p className="text-gray-400 text-sm">{subTitle}</p>}
    </div>
  );
};

export { SmallHeader };
