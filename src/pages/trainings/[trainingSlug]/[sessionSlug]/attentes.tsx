import { HomeLayout } from "@/components";
import { AttentesMain } from "@/components/Training/AttentesMain";
import { getTraining } from "@/services/endpoints/getTraining";
import { ISession, ITraining } from "@/types";
import Head from "next/head";

const AttentesSession = ({
  training,
  session,
}: {
  training: ITraining;
  session: ISession;
}) => {
  return (
    <HomeLayout>
      <Head>
        <title> Vos attentes | Formations Chillo </title>
      </Head>
      <AttentesMain training={training} session={session} />
    </HomeLayout>
  );
};

export default AttentesSession;

export const getServerSideProps = async (ctx: any) => {
  const training = await getTraining({
    slug: ctx.params.trainingSlug,
  });
  if (!training) {
    return {
      redirect: {
        destination: "/404", // Chemin de votre page d'erreur 404
        permanent: false,
      },
    };
  }
  const session =
    training.sessions.find((item) => item.slug === ctx.params.sessionSlug) ||
    null;
  if (!session) {
    return {
      redirect: {
        destination: "/404", // Chemin de votre page d'erreur 404
        permanent: false,
      },
    };
  }
  return { props: { training, session } };
};
