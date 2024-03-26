import { HomeLayout, HomeMain } from "@/components";
import { getHomeView } from "@/services/endpoints/getHomeView";
import { getTrainings } from "@/services/endpoints/getTrainings";
import { ITraining } from "@/types";
import Head from "next/head";

export default function Home({
  trainings,
  articles,
  statistics,
}: {
  trainings: ITraining[];
  articles: any;
  statistics: any;
}) {
  console.log("articles", articles);
  console.log("statistics", statistics);
  return (
    <>
      <Head>
        <title> Acceuil | Formations Chillo</title>
      </Head>
      <HomeLayout>
        <HomeMain trainings={trainings} articles={articles} statistics={statistics} />
      </HomeLayout>
    </>
  );
}

export const getServerSideProps = async () => {
  let trainings: ITraining[] = [];
  let res: any = {};
  try {
    const incommingTrainings = await getTrainings();

    trainings = incommingTrainings;
    res = await getHomeView();
  } catch (error) {
    console.log("error when trying to get trainings", error);
  }
  return {
    props: { trainings, articles: res.articles||null, statistics: res.statistics||null },
  };
};
