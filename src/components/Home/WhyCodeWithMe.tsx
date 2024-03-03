import React from "react";
import { CodeWithMeCard, Heading } from "..";
import { mockSections } from "@/data";

const WhyCodeWithMe = () => {
  return (
    <section className="container max-w-[1100px] mx-auto">
      <div className="container px-4">
        <Heading title="Nos valeurs" />
        <div>
          {mockSections.map((section, index) => {
            return (
              <CodeWithMeCard
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
