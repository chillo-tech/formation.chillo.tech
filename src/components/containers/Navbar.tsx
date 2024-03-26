"use client";
import { NavbarLinks } from "@/data";
import { HurgeGeometricBold, KazimirRegular } from "@/fonts";
import { useNavbar } from "@/hooks";
import { animated, useSpring } from "@react-spring/web";
import classNames from "classnames";
import Link from "next/link";
import { useEffect } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Logo } from "..";

const Navbar = () => {
  const { fixed, isVisible, ref, setIsVisible } = useNavbar();

  const [style, api] = useSpring(() => ({
    from: {
      opacity: 0,
      height: "0vh",
      padding: 0,
      display: "none",
    },
    to: {
      opacity: 1,
      padding: 0,
      display: "none",
      height: "100vh",
    },
  }));

  useEffect(() => {
    if (isVisible) {
      api.start({
        height: "100vh",
        opacity: 1,
        padding: 26,
        display: "block",
      });
    } else {
      api.start({
        padding: 0,
        opacity: 0,
        height: "0vh",
        display: "none",
      });
    }
  }, [isVisible]);

  return (
    <nav
      ref={ref}
      className={`${
        HurgeGeometricBold.className
      } font-bold w-full h-[70px] sm:h-[93px] lg:h-[111px] text-[#5a6879] flex items-center justify-center text-[16px] uppercase ${classNames(
        {
          "shadow-md sticky top-0 left-0 w-full bg-[#f7f7f8] z-50": fixed,
          relative: !fixed,
        }
      )}`}
    >
      <div className="my-3 flex justify-between container items-center">
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
        <Link href="/trainings">
          <button
            style={{ color: "white" }}
            className="rounded-[35px] hidden lg:block bg-green-300 text-white py-4 px-7"
          >
            Tous les cours
          </button>
        </Link>
        <button
          className="flex lg:hidden"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          {isVisible ? <MdClose size={27} /> : <MdMenu size={27} />}
        </button>
        <animated.div
          style={style}
          className="grid text-[16px] space-y-[28px] sm:text-[32px] text-heading items-center !font-heading fontF-heading md:text-[42px] overflow-hidden lg:hidden fixed left-[0] top-[0] w-full h-[100vh] border-[24px] p-12 border-[#1e133e] bg-white z-50"
        >
          <button
            className="justify-self-end block float-right"
            onClick={() => setIsVisible((prev) => !prev)}
          >
            <MdClose size={27} />
          </button>
          {NavbarLinks.map((link, index) => (
            <Link
              key={`nav-link-${link.path}-${index}`}
              href={link.path}
              className={`block text-center hover:text-blue-500 h-fit ${KazimirRegular.className} capitalize font-normal`}
            >
              {link.label}
            </Link>
          ))}
          <button
            style={{ color: "white" }}
            className="rounded-[35px] self-center mx-auto w-full text-[16px] bg-green-300 py-5 px-6 w-fit h-fit"
          >
            Tous les cours
          </button>
        </animated.div>
      </div>
    </nav>
  );
};

export { Navbar };
