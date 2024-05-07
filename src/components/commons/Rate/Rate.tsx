import React from "react";
import { StarBox } from "./StarBox";

const Rate = ({ rate }: { rate: number }) => {
  return (
    <div className="inline-flex p-2 h-fit w-fit gap-1">
      {Array(5)
        .fill(0)
        .map((el, index) => {
          return (
            <StarBox
              key={`star-box-${index}`}
              percentage={rate - index - 1 > 0 ? 1 : rate - index}
            />
          );
        })}
    </div>
  );
};

export { Rate };
