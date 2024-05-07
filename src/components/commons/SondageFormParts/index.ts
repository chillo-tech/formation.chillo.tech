import { ISondage, Question } from "@/types";
import UserInfoForm from "./UserInfoForm";
import genASliceOfForm from "./genASliceOfForm";

export const maxFieldPerPage = 3;

const Pages = (sondage: ISondage) => {
  // chaque page doit avoir maximum 3 champs
  // on doit casser les questions en groupe de 3
  const slices: Question[][] = [];

  for (let i = 0; i < sondage.questions.length; i += maxFieldPerPage) {
    slices.push(sondage.questions.slice(i, i + maxFieldPerPage));
  }
  console.log("slices", slices);
  const otherPages = slices.map((slice) => genASliceOfForm({ slice }));
  return [UserInfoForm, ...otherPages];
};

export { Pages };
