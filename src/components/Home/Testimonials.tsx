import { ApplicationContext } from "@/context";
import Link from "next/link";
import { useContext } from "react";
import { Heading, TestimonialCarousel, YellowRate } from "..";

const Testimonials = () => {
  const { state } = useContext(ApplicationContext);
  const view = {
    rate: 4.2,
    reviews: 3394,
  };
  return (
    <section className="py-5 my-5">
      <div className="container mx-auto">
        <Heading title="Ce que disent mes élèves" label="TÉMOIGNAGES" />
        <div className="flex items-center gap-2 justify-center">
          <YellowRate rate={view.rate} />{" "}
          <p className="text-lg">
            <span className="font-bold text-xl">{view.rate.toFixed(2)}</span>{" "}
            sur 5 basé sur{" "}
            <Link
              href="#"
              className="pb-[2px] font-semi-bold border-b border-b-blue-500 text-blue-500 hover:border-b-blue-800 hover:text-blue-800 transition-all"
            >
              {view.reviews} avis
            </Link>
          </p>
        </div>
      </div>
      <TestimonialCarousel />
    </section>
  );
};

export { Testimonials };
