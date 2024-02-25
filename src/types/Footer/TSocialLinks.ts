import { FooterIcons } from "@/data";

type TSocialLinks = {
  path: string;
  icon: keyof typeof FooterIcons;
};

export type { TSocialLinks };
