import React from "react";
import { PricingSubscriptionCard } from "..";
import { pricingByMonth } from "@/data";

const Pricings = () => {
  return (
    <section className="my-12 py-5 mx-auto">
      <PricingSubscriptionCard pricing={pricingByMonth} />
    </section>
  );
};

export { Pricings };