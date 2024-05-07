import React from "react";
import { PricingCard } from "..";
import { pricingByMonth } from "@/data";

const Pricings = () => {
  return (
    <section className="my-12 py-5 mx-auto flex items-center justify-center gap-5">
      <PricingCard pricing={pricingByMonth} />
    </section>
  );
};

export { Pricings };
