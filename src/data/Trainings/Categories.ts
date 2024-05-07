import { TOption } from "@/types";

const categoriesNames = [
  "Developpement Frontend",
  "Developpement Backend",
  "Developpement Fullstack",
  "Langages de programation",
];

const categories: TOption[] = [
  {
    text: "Tous les cours",
    value: "",
  },
];

categoriesNames.forEach((name) => {
  categories.push({
    text: name,
    value: name,
  });
});

export { categories, categoriesNames };
