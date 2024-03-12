import React from "react";

const OptionCard = ({
  getIcon,
  iconName,
  label,
}: {
  iconName: string;
  getIcon: (iconName: string) => React.ReactNode;
  label: string;
}) => {
  return (
    <div className="rounded-md px-3 gap-2 py-2 text-gray-600 flex items-center bg-[#5a68790f]">
      <div className="shrink-0">{getIcon(iconName)}</div>{" "}
      <span className="text-[18px]">{label}</span>
    </div>
  );
};

export { OptionCard };
