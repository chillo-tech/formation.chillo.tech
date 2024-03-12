import { HomeLayout } from "@/components";
import { AllTrainingsMain } from "@/components/commons/AllTrainingsMain";
import { getTrainings } from "@/services/endpoints/getTrainings";
import { ITraining } from "@/types";
import Head from "next/head";

const AllTrainings = ({ trainings }: { trainings: ITraining[] }) => {
  return (
    <>
      <Head>
        <title> Tous nos cours | Formations Chillo </title>
      </Head>
      <HomeLayout>
        <AllTrainingsMain trainings={trainings} />
      </HomeLayout>
    </>
  );
};

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

export default AllTrainings;
