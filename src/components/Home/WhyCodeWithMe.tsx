import React from "react";
import { LabelIconCard, Heading } from "..";
import { mockSections } from "@/data";

const WhyCodeWithMe = () => {
  return (
    <section className="container mx-auto">
      <div className="container px-4">
        <Heading title="Nos valeurs" />
        <div>
          {mockSections.map((section, index) => {
            return (
              <LabelIconCard
                key={`section-code-with-me-card-${index}`}
                section={section}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { WhyCodeWithMe };
