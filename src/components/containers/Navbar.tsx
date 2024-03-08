"use client";
import { NavbarLinks } from "@/data";
import { useNavbar } from "@/hooks";
import classNames from "classnames";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";
import { Logo } from "..";
import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";

const Navbar = () => {
  const { fixed, isVisible, ref, setIsVisible } = useNavbar();

  const [style, api] = useSpring(() => ({
    from: {
      opacity: 0,
      height: 0,
      padding: 0,
    },
    to: {
      opacity: 1,
      padding: 12,
      height: 320,
    },
  }));

  useEffect(() => {
    if (isVisible) {
      api.start({
        height: 320,
        opacity: 1,
        padding: 0,
      });
    } else {
      api.start({
        padding: 12,
        opacity: 0,
        height: 0,
      });
    }
  }, [isVisible]);

  return (
    <nav
      ref={ref}
      className={`w-full  ${classNames({
        "max-w-[100vw] shadow-md fixed top-0 left-0 bg-white border-l-[1rem] border-r-[1rem] border-l-blue-500 border-r-blue-500 z-50":
          fixed,
        relative: !fixed,
      })}`}
    >
      <div className="container mx-auto my-3 flex justify-between items-center relative">
        <Logo />
        <div className="hidden gap-3 items-center lg:flex">
          {NavbarLinks.map((link, index) => (
            <Link
              key={`nav-link-${link.path}-${index}`}
              href={`/${link.path}`}
              className="py-2 px-3 hover:text-blue-500"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          style={{ color: "white" }}
          className="rounded-[25px] hidden lg:block bg-green-300 text-white py-1 px-5"
        >
          Tous les cours
        </button>
        <button
          className="flex lg:hidden"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          {isVisible ? <MdClose size={27} /> : <MdMenu size={27} />}
        </button>
        <animated.div
          style={style}
          className="flex overflow-hidden lg:hidden flex-col gap-3 absolute top-[100%] w-full bg-white p-3 z-50"
        >
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
            className="rounded-[25px] bg-green-300 py-1 px-5 w-fit"
          >
            Tous les cours
          </button>
        </animated.div>
      </div>
    </nav>
  );
};

export { Navbar };
