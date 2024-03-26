import React from "react";
import { LabelIconCard, Heading } from "..";
import { mockSections } from "@/data";

const WhyCodeWithMe = ({ article }: { article: any }) => {
  console.log("article code with me", article);
  return (
    <section className="container mx-auto">
      <div className="container px-4">
        <Heading title={article.title} />
        <div>
          {mockSections(article.sections).map((section, index) => {
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
