import { ITraining } from "@/types";
import { genOptions } from "@/utils";

const options = [
  "51 cours complets",
  "340 heures de vidéo HD",
  "Contenu téléchargeable",
  "Exercices pratiques",
  "Légendes en anglais",
  "Certificat d'achèvement",
  "Accéder en étant abonné",
  "Apprenez à votre propre rythme",
];

const pricingByMonth = (training: ITraining) => ({
  label: "TOUS LES COURS",
  price: `${training.price.value}${training.price.currency}/mois`,
  options: genOptions(training),
});

export { options, pricingByMonth };
