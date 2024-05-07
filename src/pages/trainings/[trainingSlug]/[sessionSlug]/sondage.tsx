import { HomeLayout } from "@/components";
import { SondageMain } from "@/components/Training/SondageMain";
import { getSondage, getTraining } from "@/services/endpoints/getTraining";
import { ISession, ISondage, ITraining } from "@/types";
import Head from "next/head";

const SondageSession = ({
  sondage,
}: {
  sondage: ISondage;
}) => {
  return (
    <HomeLayout>
      <Head>
        <title> Qu'en pensez vous? | Formations Chillo </title>
      </Head>
      <SondageMain sondage={sondage} />
    </HomeLayout>
  );
};

export default SondageSession;

export const getServerSideProps = async (ctx: any) => {
  const sondage = await getSondage({
    slug: ctx.params.trainingSlug,
    sessionSlug : ctx.params.sessionSlug
  });
  if (!sondage) {
    return {
      redirect: {
        destination: "/404", // Chemin de votre page d'erreur 404
        permanent: false,
      },
    };
  }
  
  return { props: { sondage } };
};
