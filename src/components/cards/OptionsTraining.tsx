import { ApplicationContext } from "@/context";
import { capitalize } from "@/utils";
import { getIconForOptions } from "@/utils/getIconFunctions";
import { useContext, useMemo } from "react";
import { OptionCard } from ".";

const OptionsTraining = () => {
  const {
    state: { actualTraining: training },
  } = useContext(ApplicationContext);
  const lessonsCount = useMemo(() => {
    let res = 0;
    if (!training) return 0;
    training.chapters.forEach((chapter) => {
      res += chapter.Chapter_id.Lessons.length;
    });
    return res;
  }, [training]);
  return (
    training && (
      <div className="grid grid-cols-2 gap-3 grid-rows-4 pt-2 text-heading">
        {training.levels &&
          Array.isArray(training.levels) &&
          training.levels.length > 0 &&
          training.levels.map((level, index) => {
            return (
              <OptionCard
                key={`level-${index}`}
                getIcon={getIconForOptions}
                iconName="stats"
                label={capitalize(level.Training_Levels_id.title) || ""}
              />
            );
          })}

        <OptionCard
          label={`${training.hours} heure${
            training.hours > 1 && "s"
          } de vidéos HD`}
          getIcon={getIconForOptions}
          iconName="video"
        />
        <OptionCard
          label={`${lessonsCount} Leçon${lessonsCount > 1 && "s"}`}
          getIcon={getIconForOptions}
          iconName="file-text"
        />
        {training.downloadableContent && (
          <OptionCard
            label="Contenu téléchargeable"
            getIcon={getIconForOptions}
            iconName="cloud-download"
          />
        )}
        {training.handsOnExcercise && (
          <OptionCard
            label="Exercices pratiques"
            getIcon={getIconForOptions}
            iconName="code"
          />
        )}
        {training.certificateOfComplete && (
          <OptionCard
            label="Certificat d'achèvement"
            getIcon={getIconForOptions}
            iconName="trophy"
          />
        )}
        {training.lifetimeAcces && (
          <OptionCard
            label="Accès à vie"
            getIcon={getIconForOptions}
            iconName="infinity"
          />
        )}
        {training.learnAtYourOwnPace && (
          <OptionCard
            label="Apprenez à votre propre rythme"
            getIcon={getIconForOptions}
            iconName="clock"
          />
        )}
      </div>
    )
  );
};

export { OptionsTraining };
