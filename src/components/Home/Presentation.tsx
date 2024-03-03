import { Heading } from "..";

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
    </section>
  );
};

export { Presentation };
