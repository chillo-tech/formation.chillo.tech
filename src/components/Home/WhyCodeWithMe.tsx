import React from "react";
import { CodeWithMeCard, Heading } from "..";
import { mockSections } from "@/data";

const WhyCodeWithMe = () => {
  return (
    <section className="container max-w-[1100px]">
      <div className="container">
        <Heading
          label="CARACTÉRISTIQUES"
          title="Pourquoi coder avec Achille ?"
        />
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
