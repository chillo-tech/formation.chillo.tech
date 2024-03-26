import { mesurize } from "@/utils";

const mainStats = ({
  trainingCount,
  statistics,
}: {
  trainingCount: number;
  statistics: any;
}) => [
  {
    value: mesurize(statistics.students.count),
    label: statistics.students.label,
    style: "blue",
  },
  {
    value: mesurize(statistics.fans.count),
    label: statistics.fans.label,
    style: "green",
  },
  {
    value: mesurize(statistics.years.count),
    label: statistics.years.label,
    style: "rose",
  },
  {
    value: `${trainingCount}`,
    label: "Cours",
    style: "orange",
  },
];

export { mainStats };
