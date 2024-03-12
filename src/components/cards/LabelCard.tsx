import React from "react";

const LabelCard = ({ label }: { label: string }) => {
  return (
    <div className="h-fit w-fit rounded-lg text-sm bg-[#ffffff31] text-white p-1 px-2">
      {label}
    </div>
  );
};

export { LabelCard };
