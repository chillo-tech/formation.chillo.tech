interface ITraining {
  id: number;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  title: string;
  slug: string;
  hours: number;
  type: string;
  rate: number;
  reviews: number;
  downloadableContent: boolean;
  handsOnExcercise: boolean;
  certificateOfComplete: boolean;
  lifetimeAcces: boolean;
  learnAtYourOwnPace: boolean;
  subTitle: string;
  price: IPrice;
  description: any;
  promotionVideo: string;
  image: IImage;
  onSale: boolean;
  status: string;
  chapters: {
    Chapter_id: IChapter;
  }[];
  levels: {
    Training_Levels_id: ILevel;
  }[];
  videos: any[];
  metadatas: any[];
  objectives: {
    objective_id: IObjective;
  }[];
  targets: {
    target_id: ITarget;
  }[];
  waitingList: any[];
  prerequisiteTrainings: any[];
  prerequisites: {
    prerequisite_id: IPrerequisite;
  }[];
}

interface IImage {
  id: number;
  status: string;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  link: string;
  description: string;
  name: string;
  videos: any[];
}

interface IPrice {
  id: number;
  user_created: string;
  date_created: string;
  user_updated: any;
  date_updated: any;
  value: number;
  currency: string;
  description: string;
  trainings: number[];
}

interface IChapter {
  id: number;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  title: string;
  time: number;
  description: string;
  slug: string;
  status: any;
  trainings: number[];
  Lessons: ILesson[];
}

interface ILesson {
  id: number;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  title: string;
  type?: string;
  url: any;
  time: number;
  Chapter_id: number;
  status: string;
  isFree: boolean;
  previewVideo: any;
  description: any;
  slug: string;
}

interface ILevel {
  id: number;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  title: string;
  description: string;
  trainings: number[];
}

interface IObjective {
  id: number;
  user_created: string;
  date_created: string;
  user_updated: any;
  date_updated: any;
  label: string;
  description: any;
  trainings: number[];
}

interface ITarget {
  id: number;
  user_created: string;
  date_created: string;
  user_updated: any;
  date_updated: any;
  label: string;
  description: any;
  trainings: number[];
}

interface IPrerequisite {
  id: number;
  user_created: string;
  date_created: string;
  user_updated: any;
  date_updated: any;
  label: string;
  description: string;
  trainings: number[];
}

export type {
  IChapter,
  ILesson,
  ILevel,
  IObjective,
  IPrerequisite,
  ITarget,
  ITraining,
};
