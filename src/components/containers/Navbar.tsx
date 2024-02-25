"use client";
import { NavbarLinks } from "@/data";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Logo } from "..";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
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
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [isVisible]);
  return (
    <nav ref={ref}>
      <div className="container mx-auto my-3 flex justify-between items-center relative">
        <Logo />
        <div className="hidden gap-3 items-center md:flex">
          {NavbarLinks.map((link, index) => (
            <Link
              key={`nav-link-${link.path}-${index}`}
              href={link.path}
              className="py-2 px-3 hover:text-blue-500"
            >
              {link.label}
            </Link>
          ))}
          <button
            style={{ color: "white" }}
            className="rounded-[25px] bg-green-300 text-white py-1 px-5"
          >
            Espace membre
          </button>
        </div>
        <button
          className="flex md:hidden"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          {isVisible ? <MdClose size={27} /> : <MdMenu size={27} />}
        </button>
        {isVisible && (
          <div className="flex md:hidden flex-col gap-3 absolute top-[100%] w-full bg-[#0d1224]">
            {NavbarLinks.map((link, index) => (
              <Link
                key={`nav-link-${link.path}-${index}`}
                href={link.path}
                className="py-2 px-3 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <button
              style={{ color: "white" }}
              className="rounded-[25px] bg-[#8244ff] py-1 px-5 w-fit"
            >
              Espace membre
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export { Navbar };
