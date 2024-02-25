import React from "react";
import { CountsCards, Heading } from "..";

const Presentation = () => {
  return (
    <section className="py-9 mt-9">
      <div className="mx-auto container text-center w-fit max-w-[720px] space-y-4">
        <Heading
          label="HELLO,"
          title="Je suis Achille MBOUGUENG."
          description={`Vous sentez-vous coincé ou dépassé dans votre parcours de codage ? Ne
          vous inquiétez pas, je vous soutiens ! Ensemble, nous travaillerons à
          améliorer vos compétences, à augmenter votre potentiel de revenus et à
          bâtir un avenir meilleur.`}
        />
        <video controls className="w-full mt-8">
          <source src="/videos/video-placeholder.mp4" />
        </video>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 sm:gap-6 container mx-auto my-20">
        {[
          {
            value: "10M+",
            label: "Les étudiants ont enseigné",
            style: "blue",
          },
          {
            value: "3M+",
            label: "Fans Youtube",
            style: "green",
          },
          {
            value: "20+",
            label: "Années d'expérience",
            style: "rose",
          },
          {
            value: "51",
            label: "Cours de codage",
            style: "orange",
          },
        ].map((el, index) => {
          return <CountsCards key={`count-cards-${index}`} {...el} />;
        })}
      </div>
    </section>
  );
};

export { Presentation };
