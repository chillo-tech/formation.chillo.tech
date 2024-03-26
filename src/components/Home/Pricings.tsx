import React from "react";
import { PricingCard } from "..";
import { pricingByMonth } from "@/data";
import { ITraining } from "@/types";

const Pricings = ({ allAccessTraining }: { allAccessTraining?: ITraining }) => {
  return allAccessTraining ? (
    <section className="my-12 py-5 mx-auto flex items-center justify-center gap-5">
      <PricingCard pricing={pricingByMonth(allAccessTraining)} />
    </section>
  ) : null;
};

export { Pricings };
