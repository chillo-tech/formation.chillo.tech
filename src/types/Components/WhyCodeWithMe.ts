import { iconService } from "@/data";

interface ISection {
  iconName: keyof typeof iconService.icons;
  image: string;
  label: string;
  color: string;
  title: string;
  description: string;
  /** la valeur let indique que l'image est a gauche et right que l'image est a droite */
  direction: "left" | "right";
}

export type { ISection };
