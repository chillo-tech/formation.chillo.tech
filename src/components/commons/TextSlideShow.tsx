import React, { useEffect, useState } from "react";
const TextSlideShow = ({
  texts,
}: {
  texts: { value: string; prefix?: string }[];
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [actualIndex, setActualIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActualIndex((state) => (state + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden flex gap-2">
      <span>{texts[actualIndex].prefix}</span>

      <div
        ref={containerRef}
        className="flex flex-col text-slide relative h-[50px] w-[350px] text-fader"
      >
        {texts.map((text, index) => {
          return (
            <TextSlide
              text={text.value}
              max={texts.length}
              actual={actualIndex}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export { TextSlideShow };

const TextSlide = ({
  text,
  max,
  actual,
  index,
}: {
  actual: number;
  index: number;
  text: string;
  max: number;
}) => {
  const [className, setClassName] = useState("");
  useEffect(() => {
    if (actual === 0) {
      if (index === max - 1) {
        setClassName("out");
        setTimeout(() => {
          setClassName("");
        }, 200);
      } else if (index === actual) {
        setClassName("in");
      }
    } else {
      if (index === actual) {
        setClassName("in");
      } else if (index === actual - 1) {
        setClassName("out");
        setTimeout(() => {
          setClassName("");
        }, 200);
      }
    }
  }, [actual, index]);

  return (
    <div
      className={`text-content ${className} relative`}
      style={{
        height: actual === index ? 50 : 0,
      }}
    >
      <span className="text-blue-500 line">{text}</span>
    </div>
  );
};
