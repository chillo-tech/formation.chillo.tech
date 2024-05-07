import { HomeLayout } from "@/components";
import { TrainingHome } from "@/components/Training/TrainingHome";
import { getTrainings } from "@/services/endpoints/getTrainings";
import { ITraining } from "@/types";
import Head from "next/head";
import React from "react";

const Training = ({
  trainings,
  training,
}: {
  trainings: ITraining[];
  training: ITraining;
}) => {
  return (
    <>
    <Head>
      <title>{training.title} | Formations Chillo</title>
    </Head>
    <HomeLayout>
      <TrainingHome training={training} trainings={trainings} />
    </HomeLayout>
    </>
  );
};

export const getServerSideProps = async (ctx: any) => {
  let trainings: ITraining[] = [];
  let training: ITraining | null = null;
  try {
    const incommingTrainings = await getTrainings();
    trainings = incommingTrainings;
    let foundedTraining = trainings.find(
      (item) => item.slug === ctx.params.trainingSlug
    );

    if (foundedTraining) {
      training = foundedTraining as ITraining;
    }
    if (!training) {
      return {
        redirect: {
          destination: "/404",
          permanent: false,
        },
      };
    }
  } catch (error) {
    console.log("error when trying to get trainings", error);
  }
  return { props: { trainings, training } };
};

export default Training;
