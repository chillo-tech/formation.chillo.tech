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
    <header className="mx-auto container text-center w-fit max-w-[720px] my-10">
      {label && <p className="text-blue-500 mt-4">{label}</p>}
      {title && (
        <h2 className="text-heading font-heading fontF-heading mt-5 mb-10">{title}</h2>
      )}
      {description && <p className="text-lg mt-5">{description}</p>}
    </header>
  );
};

export { Heading };
