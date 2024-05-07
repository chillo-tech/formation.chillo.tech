const mainStats = ({ trainingCount }: { trainingCount: number }) => [
  {
    value: "10M+",
    label: "Les étudiants ont enseigné",
    style: "blue",
  },
  {
    value: "3M+",
    label: "Fans Youtube",
    style: "green",
  },
  {
    value: "20+",
    label: "Années d'expérience",
    style: "rose",
  },
  {
    value: `${trainingCount}`,
    label: "Cours",
    style: "orange",
  },
];

export { mainStats };
