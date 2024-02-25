import React from "react";

const Heading = ({
  label,
  title,
  description,
}: {
  label?: string;
  title?: string;
  description?: string;
}) => {
  return (
    <div className="mx-auto container text-center w-fit max-w-[720px] space-y-4 my-8">
      {label && <p className="text-blue-500 mt-4 mb-2">{label}</p>}
      {title && (
        <h2 className="text-4xl text-heading font-bold mb-8">{title}</h2>
      )}
      {description && <p>{description}</p>}
    </div>
  );
};

export { Heading };
