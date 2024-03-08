import Link from "next/link";
import { BigCarousel, Heading, YellowRate } from "..";
import { RateChillo } from "@/data";

const Testimonials = () => {
  return (
    <section className="py-5 my-5">
      <div className="container mx-auto">
        <Heading title="Ce que disent mes élèves" label="TÉMOIGNAGES" />
        <div className="flex items-center gap-2 justify-center">
          <YellowRate rate={RateChillo.rate} />{" "}
          <p className="text-lg">
            <span className="font-bold text-xl">
              {RateChillo.rate.toFixed(2)}
            </span>{" "}
            sur 5 basé sur{" "}
            <Link
              href="#"
              className="pb-[2px] font-semi-bold border-b border-b-blue-500 text-blue-500 hover:border-b-blue-800 hover:text-blue-800 transition-all"
            >
              {RateChillo.reviews} avis
            </Link>
          </p>
        </div>
      </div>
      <BigCarousel />
    </section>
  );
};

export { Testimonials };
