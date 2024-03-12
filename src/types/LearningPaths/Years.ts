export type TYears = IYear[];

export interface IYear {
  label: string;
  title: string;
  subTitle?: string;
  data: TYearData;
}

export type TYearData =
  | {
      type: "slider";
      children: TCard[];
    }
  | {
      type: "cards-hide-show";
      children: TCardHideShow[];
    }
  | {
      type: "mixed";
      children: (TCard | TLinksContainer | TCardPlain)[];
    }
  | {
      type: "simple-slider";
      children: TCardRow[];
    };

export type TCard = {
  image: string;
  title: string;
  link?: string;
  background?: string;
  type: "simple";
};

export type TCardRow = {
  image: string;
  text: string;
  link?: string;
  background?: string;
  type: "simple-row";
};

type TLink = {
  link: string;
  title: string;
};

export type TLinksContainer = {
  textColor?: string;
  title: string;
  background?: string;
  type: "links-container";
  children: TLink[];
};
export type TCardPlain = {
  textColor?: string;
  title: string;
  background?: string;
  type: "plain-card";
  image?: string;
};

export type TCardHideShow = {
  image: string;
  title: string;
  background?: string;
  childName: IChildName;
  children: TCard[];
};

export interface IChildName {
  singular: string;
  plural?: string;
}
