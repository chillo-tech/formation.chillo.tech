import { useEffect, useRef, useState } from "react";

const useNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [fixed, setFixed] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const handler = (event: any) => {
      if (isVisible && ref.current && !ref.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [isVisible]);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 20) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return {
    isVisible,
    fixed,
    ref,
    setIsVisible,
  };
};

export { useNavbar };
