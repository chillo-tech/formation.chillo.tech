import { HomeHeaderTextsSlides } from "@/data";
import { useMemo } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { CodeView } from "..";
import { KazimirRegular } from "@/fonts";
import Link from "next/link";

const Hero = () => {
  const letterTime = 200;
  const typeData = useMemo(
    () =>
      HomeHeaderTextsSlides.map((el) => {
        const firstValue = `${
          el.prefix ? el.prefix + " " : ""
        }${el.value.toUpperCase()}`;
        return [firstValue, firstValue.length * letterTime];
      }).flat(),
    []
  );
  return (
    <section className="mt-2 mb-4 py-2">
      <div className="container mx-auto flex gap-9 flex-col md:flex-row md:items-center">
        <div className="max-w-[90%] mx-auto sm:max-w-fit flex flex-col gap-4">
          <h1
            className={`text-heading !text-[52px] md:!text-[58px] lg:!text-[102px] font-normal mb-4 leading-[100%] ${KazimirRegular.className}`}
          >
            Formez vous <br />
            <TypeAnimation
              sequence={typeData}
              wrapper="span"
              speed={15}
              className="leading-[100%] md:text-[58px] lg:text-[102px] text-green-300"
              repeat={Infinity}
            />
          </h1>
          <p className="text-[24px] md:text-[32px] text-heading ">
            Trouvez <span className="font-bold">un boulot</span> et devenez{" "}
            <span className="font-bold">financierement independant!</span>
          </p>
          <Link href="/trainings">
            <button
              style={{ color: "white" }}
              className=" justify-center md:justify-start w-full md:w-fit rounded-[35px] font-xl font-bold  py-5 px-8  items-center bg-green-300 text-white flex gap-3 hover:gap-6 transition-all"
            >
              <span className="!text-white-100">Voir tous les cours</span>
              <FaArrowRight color="white" />
            </button>
          </Link>
        </div>
        <CodeView />
      </div>
    </section>
  );
};

export { Hero };
