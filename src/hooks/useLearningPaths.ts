import { Years } from "@/data";
import { useEffect, useRef, useState } from "react";

const useLearningPaths = () => {
  const [years] = useState(Years);
  const containerRef = useRef<HTMLDivElement>(null);
  const [verticalbarHeight, setVerticalbarHeight] = useState(
    containerRef.current?.scrollHeight || 0
  );
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { height } = entry.contentRect;
        setVerticalbarHeight(height);
      }
    });

    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
    };
  }, [containerRef.current]);
  return {
    years,
    containerRef,
    verticalbarHeight,
  };
};

export { useLearningPaths };
