import React, { useEffect, useState } from "react";

const TextSlideShow = ({
  texts,
  wordDuration,
}: {
  texts: { value: string; prefix?: string }[];
  wordDuration: number;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [actualIndex, setActualIndex] = useState(0);
  useEffect(() => {
    const children = containerRef.current?.children;
    if (!children || children.length === 0) return;
    const childs = Array.from(children);
    setContainerHeight(childs[0].clientHeight);

    const style = document.createElement("style");
    let keyFrames = `@keyframes slide {`;
    const itemPercentage = 100 / texts.length;
    texts.forEach((text, index) => {
      const percentage = index * itemPercentage;
      const lastPercentage =
        (index + 1) * itemPercentage === 100
          ? 100
          : (index + 1) * itemPercentage - 5;
      keyFrames += `
        ${percentage.toFixed(2)}% {
          margin-top:-${containerHeight * index}px;
        }
        ${lastPercentage.toFixed(2)}% {
          margin-top:-${containerHeight * index}px;
        }
      `;
    });

    keyFrames += "}";

    style.innerHTML = `
      .text-slide {
        transition : all ease 200ms;
        animation: slide ${(wordDuration * childs.length) / 1000}s infinite;
      }

      ${keyFrames}
    `;

    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [containerRef.current]);

  return (
    <div
      className="overflow-hidden flex gap-2"
      style={{ height: containerHeight }}
    >
      <div ref={containerRef} className="flex flex-col text-slide w-max">
        {texts.map((text, index) => {
          return (
            <span key={`slide-show-text-${index}`} className="grow py-1 ">
              {text.prefix} <span className="text-blue-500">{text.value}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export { TextSlideShow };
