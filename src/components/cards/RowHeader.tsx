import { ILesson } from "@/types";
import { formatMilliseconds } from "@/utils";
import React from "react";
import { FaSheetPlastic, FaVideo } from "react-icons/fa6";

const RowHeader = ({ data }: { data: ILesson }) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <span className="shrink-0 text-text">
          {data.type?.toLowerCase() === "video" ? (
            <FaVideo />
          ) : (
            <FaSheetPlastic />
          )}
        </span>
        <span className="text-xl !font-heading">{data.title}</span>
      </div>
      <span className="text-xl shrink-0">
        {formatMilliseconds(data.time)[3] || "30min"}
      </span>
    </div>
  );
};

export { RowHeader };
