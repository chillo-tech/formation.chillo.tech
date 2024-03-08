import { FaArrowRight } from "react-icons/fa6";
import { CodeView, TextSlideShow } from "..";
import { HomeHeaderTextsSlides } from "@/data";

const Hero = () => {
  return (
    <section className="mt-2 mb-4 py-2">
      <div className="container mx-auto flex gap-9 flex-col md:flex-row md:items-center">
        <div className="max-w-[90%] mx-auto sm:max-w-fit flex flex-col gap-4">
          <h1 className="text-heading font-extrabold text-5xl my-4 flex flex-wrap items-center gap-2">
            formez vous <TextSlideShow texts={HomeHeaderTextsSlides} />
          </h1>
          <p className="font-2xl text-heading">
            Trouvez <span className="font-bold">un boulot</span> et devenez{" "}
            <span className="font-bold">financierement independant!</span>
          </p>
          <button
            style={{ color: "white" }}
            className="rounded-[25px] font-xl font-bold py-2 px-6 items-center bg-green-300 text-white flex gap-3 w-fit hover:gap-6 transition-all"
          >
            <span className="!text-white-100">Voir tous les cours</span>
            <FaArrowRight color="white" />
          </button>
        </div>
        <CodeView />
      </div>
    </section>
  );
};

export { Hero };
