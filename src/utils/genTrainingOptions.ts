import { ITraining } from "@/types";

const genOptions = (training: ITraining) => {
  const res: string[] = [
    "Cours approfondi",
    `${training.hours} heures de vidéos HD`,
  ];

  if (training.downloadableContent) {
    res.push("Contenu téléchargeable");
  }
  if (training.handsOnExcercise) {
    res.push("Exercices pratiques");
  }
  if (training.certificateOfComplete) {
    res.push("Certificat d'achèvement");
  }
  if (training.lifetimeAcces) {
    res.push("Acces à vie");
  }
  if (training.learnAtYourOwnPace) {
    res.push("Apprenez à votre propre rythme");
  }
  return res;
};

export { genOptions };
