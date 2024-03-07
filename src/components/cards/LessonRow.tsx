import { ILesson } from "@/types";
import { formatMilliseconds } from "@/utils";
import React from "react";
import { FaSheetPlastic, FaVideo } from "react-icons/fa6";

const LessonRow = ({ lesson }: { lesson: ILesson }) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <span className="shrink-0 text-text">
          {lesson.type?.toLowerCase() === "video" ? (
            <FaVideo />
          ) : (
            <FaSheetPlastic />
          )}
        </span>
        <span className="text-md text-heading">{lesson.title}</span>
      </div>
      <span >{formatMilliseconds(lesson.time)[3] || "30min"}</span>
    </div>
  );
};

export { LessonRow };
