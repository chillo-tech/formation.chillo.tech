import { HomeLayout, HomeMain } from "@/components";
import { getTrainings } from "@/services/endpoints/getTrainings";
import { ITraining } from "@/types";
import Head from "next/head";

export default function Home({ trainings }: { trainings: ITraining[] }) {
  return (
    <>
      <Head>
        <title> Acceuil | Formations Chillo</title>
      </Head>
      <HomeLayout>
        <HomeMain trainings={trainings} />
      </HomeLayout>
    </>
  );
}

export const getServerSideProps = async () => {
  let trainings: ITraining[] = [];
  try {
    const incommingTrainings = await getTrainings();
    trainings = incommingTrainings;
  } catch (error) {
    console.log("error when trying to get trainings", error);
  }
  return { props: { trainings } };
};
