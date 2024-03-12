import { ApplicationContext } from "@/context";
import { capitalize } from "@/utils";
import { getRateLabel } from "@/utils/getRateLabel";
import Image from "next/image";
import { useContext } from "react";
import { LabelCard } from ".";
import { YellowRate } from "..";

const TrainingHero = () => {
  const {
    state: { actualTraining: training },
  } = useContext(ApplicationContext);
  return (
    training && (
      <div className="my-5 rounded-3xl overflow-hidden bg-gradient-to-r from-blue-500 to-[#af67f6] text-[#ffffffc2]">
        <div className="flex items-center justify-between gap-6 p-5 pb-2">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              {training.skills?.slice(0, 6).map((topic, index) => {
                console.log("topic", topic);
                return <LabelCard key={index} label={topic.skills_id?.label} />;
              })}
            </div>
            <h3 className="text-white text-4xl fontF-heading mt-5 mb-3">
              {training.title}
            </h3>
            <p className="">{training.subTitle}</p>
            <div className="flex items-center my-4 text-white gap-3 px-3">
              <span className="text-lg">
                {capitalize(getRateLabel(training.rate))}
              </span>
              <span>
                <YellowRate rate={training.rate} color="yellow" />
              </span>
              <span>
                {training.reviews} vote{training.reviews > 1 && "s"}
              </span>
            </div>
          </div>
          <div className="hidden shrink-0 sm:block">
            <Image
              src={training.image?.link || ""}
              height={220}
              width={220}
              alt={training.image?.name}
              className="object-contain h-[220px] w-[220px]"
            />
          </div>
        </div>
        {training.isPreview && (
          <div className="py-3 pl-5 bg-white text-blue-500 text-center">
            <span className="text-2xl font-bold">PREVIEW</span>
          </div>
        )}
      </div>
    )
  );
};

export { TrainingHero };
